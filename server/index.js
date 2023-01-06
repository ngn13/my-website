// Imports
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const Database = require("./db")
const RouteAPI = require("./routes/api")


// Creating express app and the
// shitty database
const app = express()
app.use(bodyParser.json({extended: true}))
const db = new Database()


// Creating the routes
const routeAPI = new RouteAPI(db)
app.use("/api", routeAPI)


// main routes
app.use("/", express.static(path.resolve("public")))

app.all("*", (req,res)=>{
	res.send("<script>location.href='/'</script>")
})

app.listen(9000, ()=>{
	console.log("Server is up on port 9000")
})