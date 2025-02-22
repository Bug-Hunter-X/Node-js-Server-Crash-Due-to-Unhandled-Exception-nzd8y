# Node.js Server Crash Due to Unhandled Exception

This repository demonstrates a common issue in Node.js applications: unhandled exceptions that lead to server crashes.  The example shows a simple HTTP server that divides by zero and then logs a message to the console.  The unhandled exception causes the server to crash before it's given a chance to close gracefully, leading to potential data loss or service interruptions. The solution provided addresses this issue.

## How to Reproduce

1. Clone this repository.
2. Run `node server.js`.
3. Observe the server crash and error message.

## Solution

The solution implements proper error handling using a `try...catch` block to gracefully manage exceptions, preventing server crashes. A `process.on('uncaughtException')` event listener also handles unexpected errors, logs them, and allows for clean shutdown.

This demonstrates best practices for building robust and reliable Node.js applications.