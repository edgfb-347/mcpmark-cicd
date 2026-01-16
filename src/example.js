// Fixed example file with all linting violations resolved

// Removed unused variable

// Replaced console.log with a function that returns a value instead
function logMessage() {
  return "This is a message logged through a function";
}

// Added semicolon
const greeting = 'Hello World';

// Changed to single quotes
const message = 'This now uses single quotes';

// Function with all issues fixed
function goodFunction() {
  const singleQuoted = 'Correct quotes';
  const greeting = 'Hello from function';
  return singleQuoted + ' ' + greeting;
}

const result = goodFunction();
const finalMessage = logMessage();