const fs = require("fs")
const path = require("path")

class Database{
	constructor(){
		this.dbpath = path.resolve("./db")
		this.checkDB()
	}

	checkDB(){
		if(!fs.existsSync(this.dbpath)){
			fs.mkdirSync(this.dbpath)
		}
	}

	getDBFile(filename){
		let fpath = path.join(this.dbpath, filename+".json")
		if(!fs.existsSync(fpath)){
			return {}
		}
		return JSON.parse(
			fs.readFileSync(fpath)
		)
	}

	setDBFile(filename, data){
		let fpath = path.join(this.dbpath, filename+".json")
		fs.writeFileSync(fpath, JSON.stringify(data))
	}
}

module.exports = Database