const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle requests
  console.log('Request received');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Simulate an error to be caught
const a = 10;
const b = 0;
let result;

try{
    result = a / b;
}catch(e){
    console.error("Error in division", e)
}

//This will throw an error since the server may not be closed properly before the process ends
console.log("Server closed");