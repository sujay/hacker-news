import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier/flat';
import reactCompiler from 'eslint-plugin-react-compiler';

const config = [
  ...nextCoreWebVitals,
  prettier,
  reactCompiler.configs.recommended,
];

export default config;
