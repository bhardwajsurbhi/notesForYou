const mongoose = require('mongoose');
//const mongoURI = "mongodb://localhost:27017/notesforyou"
const mongoURI = 'mongodb+srv://notesForYouDB:iejADU91AZucwca9@cluster0.unof7xn.mongodb.net/?retryWrites=true&w=majority';

//connecting to local database on mongo compass

// mongoose.connect(DB).then(() => {
//     console.log(`connection successful with notesForYouDB`);
//   }).catch((err) => console.log(`no connection`));

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongo successfully")
    })
}

module.exports = connectToMongo;