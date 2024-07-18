##### What is NodeJS ?
    - It is a run time environement for Javascript.
    - Ryan Dahl -> Founder of NodeJS - V8 engine(open source) embedded with C++.
    - Now, we can run Javascript outside the browser.
    - Javascript can talk to native machine because of C++.

`JavaScript is a scripting language whereas Node.js is an engine that provides the runtime environment to run JavaScript code.`

###### REPL
`Read-Eval-Print-Loop (REPL) is an interactive shell that processes Node.js expressions.`

###### Event-driven Architecture
`Node.js is single-threaded by default. However, it utilizes event-driven architecture and non-blocking I/O operations to handle multiple concurrent requests efficiently, enabling scalability and high performance in applications.`

###### Module in NodeJs
`A Module can be considered as a block of code that provide a simple or complex functionality that can communicate with external application.`

###### Event Loop
`The event loop in Node.js is a mechanism that allows it to handle multiple asynchronous tasks concurrently within a single thread. It continuously listens for events and executes associated callback functions.`

###### Streams
`Streams are a type of data-handling method and are used to read or write input into output sequentially. Streams are used to handle reading/writing files or exchanging information in an efficient way. The stream module provides an API for implementing the stream interface. Examples of the stream object in Node.js can be a request to an HTTP server and process.stdout are both stream instances.`

###### Cluster in NodeJs
`Due to a single thread in node.js, it handles memory more efficiently because there are no multiple threads due to which no thread management is needed. Now, to handle workload efficiently and to take advantage of computer multi-core systems, cluster modules are created that provide us the way to make child processes that run simultaneously with a single parent process.`

###### Cluster Method - Fork
`Fork is a method in Node.js that is used to create child processes. It helps to handle the increasing workload. It creates a new instance of the engine which enables multiple processes to run the code.`

###### Websocket
`Web Socket is a protocol that provides full-duplex (multiway) communication i.e. allows communication in both directions(client & server) simultaneously.`

##### How MongoDB works in code ?

    1. Schema - Define the structure
        Model - using schema we create model
        Using Model - we do CRUD operations

##### Express Middleware

    1. It is a function that have access to the request object ( req ), the response object ( res ), and the next function in the application's request-response cycle.
    2. It runs everytime b/w request-response cycle.

##### MongoDB - Queries document

    https://mongoosejs.com/docs/models.html

##### Use of Express Router

    The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. Multiple requests can be easily differentiated with the help of the Router() function in Express.js.This is the advantage of the use of the Router.

##### Password Hash

    can be done using - crypto (default node package), bcrypt (external package)

`Read more - check Node.md`