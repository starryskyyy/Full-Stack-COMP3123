var http = require("http")
console.log("Lab 03 -  NodeJs");
let employees = require("./Employee.js")
console.log(employees)

//Define Server Port
var port = process.env.PORT || 8081

//Create Web Server using CORE API
var server = http.createServer((req, res) => {

    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            res.write("<h1>Welcome to Lab Exercise 03</h1>")
        }

        if (req.url === '/employee') {
            res.write("<h1>Employees:</h1>")
            res.write(JSON.stringify(employees))
        }

        if (req.url === '/employee/names') {
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            var names = [];
            for (let i in employees) {
                names.push(employees[i]["firstName"] + " " + employees[i]["lastName"]);
            }
            res.write("<h1>Names:</h1>");
            res.write(JSON.stringify(names.sort()))

        }

        if (req.url === '/employee/totalsalary') {
            var total_salary = {"total_salary" : 0}
            let sum = 0
            for (let i in employees) {
                sum += employees[i]["Salary"]
            }
            total_salary['total_salary'] = sum
            res.write("<h1>Total Salary:</h1>")
            res.write(JSON.stringify(total_salary))
        }
        res.end
    }
})

server.listen(port, (err) => {
    if (err) {
        console.log("Server: " + err)
        return
    }
    console.log(`Server listening on port ${port}`);
})