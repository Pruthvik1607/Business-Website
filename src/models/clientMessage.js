const  mongoose = require("mongoose");


const clientSchema = mongoose.Schema({
    name :{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        validator(value){
            if(!value.isEmail(value)){
                throw new Error("Email is Invalid")
            }
        }
    },
    phone:{
        type:Number,
        require:true,
        
        min:10

    },
    message:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// create a collection
const Client = mongoose.model("Client",clientSchema);

module.exports = Client;