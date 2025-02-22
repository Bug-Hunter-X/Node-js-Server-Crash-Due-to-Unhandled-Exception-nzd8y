const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle requests
  console.log('Request received');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

const port = 3000;

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  server.close(() => {
    console.log('Server closed gracefully after uncaught exception.');
    process.exit(1);
  });
});

//Use try catch block to handle errors
const a = 10;
const b = 0;
let result;

try{
    result = a / b;
}catch(e){
    console.error("Error in division", e)
}

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Server will be closed gracefully
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed gracefully.');
    process.exit(0);
  });
});
