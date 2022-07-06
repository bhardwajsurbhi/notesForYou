const mongoose =require('mongoose');
const {Schema} = mongoose;
// const DB = 'mongodb+srv://notesForYouDB:iejADU91AZucwca9@cluster0.unof7xn.mongodb.net/?retryWrites=true&w=majority';


// mongoose.connect(DB).then(() => {
//   console.log(`connection successful`);
// }).catch((err) => console.log(`no connection`));


//creating schema for database
const UserSchema =new Schema({
  name:{
    type: String,
    required: true,
       },

  email:{
    type: String,
    required: true,
    unique: true,
       },

  password:{
    type: String,
    required: true,
       },
  
  date:{
    type: Date,
     default: Date.now,
       },

   
});

const User = mongoose.model('user', UserSchema);

module.exports = User