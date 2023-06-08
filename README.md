
# Cypress Unit Test Guide
## Steps to run Cypress Unit Tests


1. Open a terminal or command prompt.
2. Navigate to the root directory of your project.
3. Run the following command to open Cypress:  ```cmd npx cypress open ```
4. The Cypress Test Runner will launch, displaying available test files.
5. Choose "Component Testing" from the options.
6. Select your preferred browser for testing (e.g., Chrome, Firefox).
7. Choose the component you want to test from the provided list.
8. Cypress will execute the tests, and you can monitor the progress in the test runner interface.
9. Once the tests complete, check the results on the left side of the test runner. It will indicate pass/fail status and display any error messages or logs.
10. Click on a test case to view detailed output, including screenshots and videos captured during the test execution.

--- 

# Cypress E2E Test Guide
## Steps to run Cypress E2E test

1. Open a terminal or command prompt.

2. Navigate to the root directory of your project.

3. Run the following command to open Cypress:

```  npm run serve & npx cypress run ```

4. Resualt will be shown in the terminal

--- 

# ESLint testing
## Steps to run ESLint testing

Currently rules for ESLing
    *"no-undef": "off",   
    "no-unused-vars": "warn",  
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",*



1. Open a terminal or command prompt.

2. Navigate to the root directory of your project.

3. Run the following command to open Cypress:

```  npx eslint . ```

4. Resualt will be shown in the terminal