import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hookSource = path.resolve(__dirname, 'pre-commit.sh');
const hookTarget = path.resolve(__dirname, '../.git/hooks/pre-commit');

if (fs.existsSync(path.resolve(__dirname, '../.git'))) {
  const hookContent = '#!/bin/sh\npython3 scripts/update_docs.py\n';
  fs.writeFileSync(hookTarget, hookContent);
  fs.chmodSync(hookTarget, '755');
  console.log('Git pre-commit hook installed.');
}
