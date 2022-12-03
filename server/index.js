const express = require("express")
const path = require("path")
const app = express()
const port = 80

console.log(path.resolve("public"))
app.use("/", express.static(path.resolve("public")))

app.all("*", (req,res)=>{
	res.send("<script>location.href='/'</script>")
})

app.listen(port, ()=>{
	console.log("Server is up on port " + port.toString())
})