const mongoose = require("mongoose"); 
mongoose.connect("mongodb://localhost:27017/bookRecipe" 
// {
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }
).then(()=>{
    console.log("Connection successful")
}).catch((err) =>{
    console.log("No  Connection")
})