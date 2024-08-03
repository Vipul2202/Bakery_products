const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/backers")
.then(obj=()=>{
    console.log("Connected to MongoDB");
}

)
.catch(err=()=>{
    console.log("error in db connection"+err)
}

)