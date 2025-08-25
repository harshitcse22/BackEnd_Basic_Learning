// step1: create a folder 
// step2: move into that folder
// step3: npm init -y
// step4: open folder using vscode
// step5: mpn i express
// step6: create server.js

//Server Instantiate
const express = require('express');
const app = express();

// activate the server on 3000 port
app.listen(3000,() =>{
    console.log("Server Started at port no. 3000")
});


// Routes
app.get('/',(req,res)=>{
    res.send("hello jee, kaise ho saare");
})

app.post('/api/cars', (req,res) =>{
     const {name,brand} = req.body;
     console.log(name);
     console.log(brand);
     res.send("car submitted successfully");
})