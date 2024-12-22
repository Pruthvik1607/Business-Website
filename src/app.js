require('dotenv').config();
const { setEngine } = require('crypto');
const express = require('express');
const path = require('path');
const Client = require("./models/clientMessage")
require("./db/conn");
const hbs = require('hbs')
const app = express();
const port = process.env.port || 3000;


//add bootstrap and jQuery pass to /css route
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));

//middleware
app.use(express.static(path.join(__dirname,"../public")));


// path view engine
const template_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials")

//for getting data form contact

app.use(express.urlencoded({extended:false}))
// set view Engine
app.set("view engine","hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);



app.get('/',(req,res)=>{
    res.render("index");
})

app.get('/contact',(req,res)=>{
    res.render("contact");
})
app.post('/contact',async(req,res)=>{
    try {
        const clientData = new Client(req.body);
        await clientData.save();
        res.status(201).render('index');
    } catch (error) {
        res.status(500).send(error)
    }
})

app.listen(port,() => {
    console.log(`server is running http://localhost:${port}`);
})