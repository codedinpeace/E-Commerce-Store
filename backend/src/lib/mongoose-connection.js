const mongoose = require('mongoose')
const connection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URL)
        .then(()=>console.log("MongoDB connected Successfully💹"))   
    }
    catch(error){
        console.log("Something went wrong")
    }
}
    
module.exports = connection
