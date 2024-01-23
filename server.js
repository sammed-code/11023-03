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

app.post("/todos", (req, res) => {
    let newToDo = req.body.item;
    toDoList.push(newToDo);
    res.status(201).send({
        message: "The task was successfully added"
    })
})

app.delete("/todos", (req, res) => {
    let itemToDelete = req.body.item;

    toDoList.find((e, i) => {
        if (e === itemToDelete) {
            toDoList.splice(i, 1);
        }
    });

    res.status(204).send({
        message: `Deleted item ${req.body.item}`
    })
})

// Apart from above executed it executes remaining all
app.all("/todos", (req, res) => {
    res.status(501).send({
        message: "Not yet implemented"
    })
})

app.all("*", (req, res) => {
    res.status(404).send({
        message: "Wrong url"
    })
})

app.listen(port, () => {
    console.log(`NodeJS with Express started successfully on port ${port}`);
})