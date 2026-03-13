import os
import sys
import subprocess
import re
from datetime import datetime

def get_changed_files():
    """Returns a list of changed files that are components or stories."""
    try:
        # Get staged changes
        output = subprocess.check_output(['git', 'diff', '--cached', '--name-only'], text=True)
        files = output.splitlines()
        # Filter for component related files in src/components
        component_files = [f for f in files if f.startswith('src/components/')]
        return component_files
    except Exception as e:
        print(f"Error getting changed files: {e}")
        return []

def get_file_diff(filepath):
    """Returns the git diff for a specific file."""
    try:
        return subprocess.check_output(['git', 'diff', '--cached', '--', filepath], text=True)
    except Exception as e:
        # If file is deleted, diff might fail or be empty depending on how it's called
        return ""

def generate_intelligent_summary(filepath, diff):
    """
    Placeholder for an intelligent summary generation.
    """
    if not diff:
        return f"Removed {os.path.basename(filepath)}"

    summary = f"Updated {os.path.basename(filepath)}"

    # Simple heuristic to simulate 'intelligence'
    if 'stories' in filepath:
        if 'export const' in diff:
            new_stories = re.findall(r'\+export const (\w+)', diff)
            if new_stories:
                summary = f"Added new stories to {os.path.basename(filepath)}: {', '.join(new_stories)}"
    elif filepath.endswith('.tsx'):
        if 'interface' in diff or 'type' in diff:
            summary = f"Updated props or types in {os.path.basename(filepath)}"
        elif 'const' in diff and '=>' in diff:
            summary = f"Updated component logic in {os.path.basename(filepath)}"

    return summary

def update_mdx_description(component_dir, summary):
    """Updates the description in the .mdx file if it exists."""
    mdx_path = os.path.join(component_dir, f"{os.path.basename(component_dir)}.mdx")
    if os.path.exists(mdx_path):
        with open(mdx_path, 'r') as f:
            content = f.read()

        # Regex to find the description section
        desc_pattern = r'(## Description\n)(.*?)(\n\n|#|$)'
        new_desc = f"## Description\n{summary}\n\n"

        if re.search(desc_pattern, content, re.DOTALL):
            updated_content = re.sub(desc_pattern, new_desc, content, flags=re.DOTALL)
        else:
            # If not found, try to append it after the title
            title_match = re.search(r'(# .*\n)', content)
            if title_match:
                updated_content = re.sub(r'(# .*\n)', r'\1\n' + new_desc, content)
            else:
                updated_content = new_desc + content

        with open(mdx_path, 'w') as f:
            f.write(updated_content)

        # Stage the updated mdx file
        subprocess.run(['git', 'add', mdx_path])
        return True
    return False

def update_changelog(summary):
    """Appends an entry to CHANGELOG.md."""
    changelog_path = 'CHANGELOG.md'
    date_str = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    entry = f"### [{date_str}]\n- {summary}\n\n"

    if os.path.exists(changelog_path):
        with open(changelog_path, 'r+') as f:
            content = f.read()
            f.seek(0, 0)
            # Find the first line that isn't the title and insert after it or at top
            if content.startswith("# Changelog"):
                title_end = content.find('\n\n')
                if title_end != -1:
                    f.write(content[:title_end+2] + entry + content[title_end+2:])
                else:
                    f.write("# Changelog\n\n" + entry + content[len("# Changelog"):])
            else:
                f.write("# Changelog\n\n" + entry + content)
    else:
        with open(changelog_path, 'w') as f:
            f.write("# Changelog\n\n" + entry)

    # Stage the changelog
    subprocess.run(['git', 'add', changelog_path])

def main():
    changed_files = get_changed_files()
    if not changed_files:
        return

    summaries = []
    processed_dirs = set()

    for filepath in changed_files:
        diff = get_file_diff(filepath)
        summary = generate_intelligent_summary(filepath, diff)
        summaries.append(summary)

        # Determine component directory
        path_parts = filepath.split('/')
        if len(path_parts) >= 3 and path_parts[1] == 'components':
            component_dir = os.path.join(*path_parts[:3])
            if component_dir not in processed_dirs:
                if update_mdx_description(component_dir, summary):
                    processed_dirs.add(component_dir)

    if summaries:
        full_summary = "; ".join(summaries)
        update_changelog(full_summary)
        print(f"Docs updated: {full_summary}")

if __name__ == "__main__":
    main()
