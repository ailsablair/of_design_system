# Agent Instructions for Out&Found Design System

## Documentation Standards
- Every component must have a corresponding Storybook story file (`.stories.tsx`).
- Every component must have a documentation file in the "Docs" section.
- Use `tags: ['autodocs']` in story files for automatic documentation.
- For more complex components, create a `.mdx` file in the same directory as the component to provide rich context, usage guidelines, and examples.
- Ensure all stories have descriptive comments as they are used by Storybook's autodocs to generate descriptions.

## Build and Environment
- The project uses ESM (`"type": "module"`). Use `import.meta.url` and `fileURLToPath` for path resolution instead of `__dirname`.
- Storybook runs on port 6006.
- Build command: `npm run build-storybook`.
