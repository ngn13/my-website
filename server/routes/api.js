const express = require('express')
const crypto = require('crypto')

function gimmeCookie() {
   var result           = ""
   var characters       = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
   var charactersLength = characters.length
   for ( var i = 0; i < 69; i++ ) { // funny number
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

class RouteAPI extends express.Router{
	constructor(db) {
    	super();
    	this.db = db
    	this.loginCookie = null

    	// get projects
    	this.get("/projects", (req, res)=>{
    		res.json(db.getDBFile("projects"))
    	})

    	// admin login check
    	this.post("/login", (req,res)=>{
    		if(req.body.username===undefined || req.body.password===undefined){
    			res.json({"error":true})
    			return
    		}

    		let username = req.body.username

    		let password = crypto.createHash('sha1')
    		password.update(req.body.password)
			password = password.digest("hex")

    		const creds = db.getDBFile("admin")

    		if((!("username" in creds) || !("password" in creds))){
    			db.setDBFile("admin", {"username": username, "password": password})
    			this.loginCookie = gimmeCookie()
    			res.cookie("login", this.loginCookie)
    			res.json({"error":false})
    			return
    		}

    		if((creds["username"]!==username||creds["password"]!==password)){
    			res.json({"error":true})
    			return
    		}

         this.loginCookie = gimmeCookie()
         res.cookie("login", this.loginCookie)
         res.json({"error":false})
    	})

    	// add project
    	this.post("/newproject", (req,res)=>{
    		let cookie = req.headers.cookie

         if (cookie!=="login="+this.loginCookie){
            res.json({"error":true})
            return
         }

         let projects = db.getDBFile("projects")

         if (projects==={}){
            projects["projects"] = []
         }

         let project = {
            name: req.body.name,
            desc: req.body.desc,
            github: req.body.github,
            web: req.body.web,
            background: req.body.background
         }

         projects["projects"].push(project)
         db.setDBFile("projects", projects)
         
    	})

      this.post("/delproject", (req,res)=>{
         let cookie = req.headers.cookie

         if (cookie!=="login="+this.loginCookie){
            res.json({"error":true})
            return
         }

         let projects = db.getDBFile("projects")

         if (projects==={}){
            res.json({"error":"Project not found"})
            return
         }

         for (let i = 0; i<projects["projects"].length; i++){
            if(projects["projects"][i]["name"]==req.body.name){
               projects["projects"].splice(i, 1)
               db.setDBFile("projects", projects)
               res.json({"error":false})
               return
            }
         }

         res.json({"error":"Project not found"})
         return
         
      })

    }
}

module.exports = RouteAPI