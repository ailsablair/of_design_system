import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async ({ config }) => {
  config.module.rules.push({
    test: /\.(woff|woff2|eot|ttf|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
      	name: 'src/assets/fonts/[name][ext]',
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  return config;
};
