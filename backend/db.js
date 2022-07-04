const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/notesforyou"

//connecting to local database on mongo compass

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongo successfully")
    })
}

module.exports = connectToMongo;