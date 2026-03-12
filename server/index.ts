import express from 'express';

// Create an instance of the Express application- a web server object that can handle HTTP requests and responses. It provides a set of methods and middleware to define routes, handle requests, and manage the server's behavior.
const app = express();

// JavaScript constants are block-scoped variables that cannot be reassigned after they are declared. In this code, we define two constants: PORT and SERVER. PORT is set to 3000, which is the port number on which the server will listen for incoming requests. SERVER is set to "localhost", which is the hostname or IP address where the server will be accessible.
const PORT = 3000;
const SERVER = "localhost";


//app.get function is used to define a route handler for GET requests to the specified path. In this code, we define two routes: the root route ('/') and the '/suny' route. When a GET request is made to the root route, the server responds with "Hello, world!", and when a GET request is made to the '/suny' route, it responds with "Hello, SUNY!".
app.get('/', (_req, res) => {
  res.send('Hello, world!');
}).get('/suny', (_req, res) => {
  res.send('Hello, SUNY!');
});

//app.listen function is used to start the server and listen for incoming requests on the specified port.
app.listen(PORT, () => {
    //if it successfully starts the server, it will log a message to the console indicating that the server is running and on which address and port it can be accessed.
  console.log(`Server is running on http://${SERVER}:${PORT}`);
});
