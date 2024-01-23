const express = require('express');

// initialisation
const app = express();
app.use(express.json()); // application will now use only json format

const port = 8081;

const toDoList = ["Hey Everyone", "Hope U All", "Are Doing", "Awesome At Your Work"];

// http://localhost:8081/todos
app.get("/todos", (req, res) => {
    res.status(200).send(toDoList);
})

app.listen(port, () => {
    console.log(`NodeJS with Express started successfully on port ${port}`);
})