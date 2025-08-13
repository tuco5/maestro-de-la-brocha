/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 100,
  arrowParens: "always",
};

export default config;
