module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    ecmaVersion: 12,
    sourceType: "module",
  },
  extends: ["plugin:prettier/recommended", "plugin:vue/recommended"],
  plugins: ["prettier", "vue"],
  rules: {
    "prettier/prettier": "error",
    "vue/no-v-html": "off",
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off",
  },
};
