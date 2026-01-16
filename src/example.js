// This file contains intentional linting violations to demonstrate the CI workflow

// Unused variable - should trigger no-unused-vars error
const unusedVariable = "This variable is never used";

// Console statement - should trigger no-console warning
console.log("This is a console statement that should be flagged");

// Missing semicolon - should trigger semi error
const greeting = "Hello World"

// Double quotes instead of single quotes - should trigger quotes error
const message = "This should use single quotes";

// Function with mixed issues
function badFunction() {
  console.log("Multiple violations here")
  const doubleQuoted = "Wrong quotes"
  let anotherUnused
  return doubleQuoted
}

badFunction();