const http = require('http');
const url = require('url');

const student = 
[
    {
        id : 19-020072,
        name: "Mark Daniel",
        college : "CAS"
    },
    {
        id : 19-020073,
        name: "Levi Adina",
        college : "CAS"
    },
    {
        id : 19-020074,
        name: "Marc Batangan",
        college : "COE"
    }
]

http.createServer((req, res)=>
{
    const parsedUrl = url.parse(req.url, true);

    if(parsedUrl.pathname == '/profile' && req.method == "GET")
    {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(JSON.stringify(student));
        res.end();
    }
    else if (parsedUrl.pathname == '/addstudent' && req.method == "POST")
    {
        let studentBody = '';
        req.on('data', (inputs)=>
        {
            studentBody += inputs;
        });

        req.on('end', ()=>
        {
            let parsedStudent = JSON.parse(studentBody);
            student.push(parsedStudent);
            res.write(JSON.stringify(student));
            res.end();
        })
        // res.writeHead(200, {'Content-Type' : 'text/plain'});
        // res.end("You have succesfully added the student in server!")
    }
    else if (parasedUrl.pathname == '/updateStudent' && req.method == "PUT")
    {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Successfully updated the student in server");
    }
    else if (parsedUrl.pathname == '/deleteSudent' && req.method == "DELETE")
    {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("Deleted the student in server")
    }
    else if (parsedUrl.pathname == '/' && req.method == "GET")
    {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("Welcome to Student Server");
    }
    else
    {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("404 NOT FOUND");
    }
}).listen(4000);

console.log("You are now connected to https://localhost:4000");