module.exports = {
  plugins: [
    "react",
    "react-hooks",
    "import",
    "simple-import-sort",
    "prettier",
    "jsx-a11y",
    "jsdoc",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    // "react-app",
    "prettier/prettier",
    "plugin:import/recommended",
    "plugin:jsdoc/recommended",
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-unused-vars": "warn",
    "prettier/prettier": ["error"],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/no-anonymous-default-export": 0,
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "eol-last": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "object-curly-spacing": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "computed-property-spacing": ["error", "never"],
    "comma-spacing": ["error", { before: false, after: true }],
    quotes: ["error", "double"],
    "no-tabs": ["error", { allowIndentationTabs: true }],
    semi: ["error", "always"],
    "object-shorthand": "error",
    "no-new-object": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
    ],
    "eslint/no-var-requires": 0,
    "react/prop-types": 0,
    "import/namespace": 0,
    "import/no-unresolved": "off",
    "import/no-named-as-default": 0,
    "no-useless-escape": "warn",
    "jsdoc/require-jsdoc": 0,
  },
  env: {
    node: true,
    es6: true,
    browser: true,
    es2021: true,
    commonjs: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020,
    sourceType: "module",
  },
};
