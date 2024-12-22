const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_KEY)
.then(()=>{
    console.log("connection successful")
})
.catch((error)=>{
    console.log(error);
})