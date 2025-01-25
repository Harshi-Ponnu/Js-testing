# JavaScript Unit Testing Expertise
## Objective:
    Writing and implementing unit tests for JavaScript functions using a testing framework like Jest. 
## Problem Statement:
    Designing and implementing unit tests for a set of JavaScript functions that simulate common operations in a web application. The task focuses on testing individual functions for correctness, edge cases, and error handling.
## Steps to Execute the Script: 
- Create a new folder and open it in VS Code.
- Run “npm init -y” in the terminal to create a “package.json” file.
- Run the following command to install Jest:
` npm install --save-dev jest `
- Create files named “caldiscount.js”, “filter.js”, “sortprod.js”, “email.js” and paste the implementation of the function into it.
- Create files named “caldiscount.test.js”, “filter.test.js”, “sortprod.test.js”, “email.test.js” in the same directory.
- Provide the test cases in the files.
- Add the following script in the scripts section of “package.json”:
`"scripts": { "test": "jest" }`
- Execute “npm test” command in the terminal to run the tests.
- The terminal will display a summary of the test results, indicating which tests passed or failed. 

## Tools and Frameworks Used:
- Node.js and npm: Used to initialize the project and manage dependencies.
- Jest: A JavaScript testing framework used to write and execute unit tests.
- VS Code: An integrated development environment (IDE) used for coding, testing, and debugging.

