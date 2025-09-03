// step1: create a folder 
// step2: move into that folder
// step3: npm init -y
// step4: open folder using vscode
// step5: mpn i express
// step6: create server.js

//Server Instantiate
const express = require('express');
const app = express();

//used to parse req.body (request body) in express -> PUT or POST
const bodyParser = require('body-parser');

//specifically parse JSON data & add it to the request.body object
app.use(bodyParser.json());

// activate the server on 3000 port
app.listen(8000,() =>{
    console.log("Server Started at port no. 8000")
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

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017//myDatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {console.log("Connection Successful")})
.catch( (error) => {console.log("Recievd an error")});