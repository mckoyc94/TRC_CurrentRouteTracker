const path = require("path");

module.exports = (app)=>{
    app.get("/", (req, res)=>{ 
        res.sendFile(path.join(__dirname, "../public/homepage.html"))
    })

    app.get("/addRoute", (req, res)=>{ 
        res.sendFile(path.join(__dirname, "../public/addRoute.html"))
    })
}