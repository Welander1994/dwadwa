module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  ignorePatterns: ["**/*.cy.js"], // Add this line to exclude Cypress files
  rules: {
    "no-undef": "error",   
    "no-unused-vars": "error",  
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  
};
