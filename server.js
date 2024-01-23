const { error } = require("console");
const http = require("http");

const port = 8081;

const toDoList = ["Hey Everyone", "Hope U All", "Are Doing", "Awesome At Your Work"];

http.createServer((req, res) => {
    const {method, url} = req;

    if (url === "/todos") {
        if (method === "GET") {
            res.writeHead(200, {"Content-Type": "text/html"});
            console.log("TODOS");
            res.write(toDoList.toString());
        }
        else if (method === "POST") {
            let body = "";
            req.on('error', (err) => {
                console.log(err);
            }).on('data', (chunk) => {
                body += chunk;
                console.log("chunk: ", chunk);
            }).on('end', () => {
                body = JSON.parse(body);
                console.log("data: ", body);
                let newToDo = toDoList;
                newToDo.push(body.item)
            })
        }
        else if (method === "PUT") {
            
        }
        else if (method === "DELETE") {
            let body = "";
            req.on('error', (err) => {
                console.log(err);
            }).on('data', (chunk) => {
                body += chunk;
            }).on('end', () => {
                body = JSON.parse(body);
                let delThis = body.item;

                // for (let i = 0; i < toDoList.length; i++) {
                //     if (toDoList[i] === delThis) {
                //         toDoList.splice(i, 1);
                //         break;
                //     }
                // }

                toDoList.find((elem, i) => {
                    if (elem === delThis) {
                        toDoList.splice(i, 1);
                    }
                })
            })
        }
        else {
            res.writeHead(501);
        }
    }
    else if (url === "/") {
        
    }

    res.end();
}).listen(port, () => {
    console.log(`NodeJS server started running on port ${port}`);
})
