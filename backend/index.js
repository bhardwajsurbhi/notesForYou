 const { connect } = require('mongoose');
const mongoose = require('mongoose');
 const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
//const DB = 'mongodb+srv://notesForYouDB:iejADU91AZucwca9@cluster0.unof7xn.mongodb.net/?retryWrites=true&w=majority';


// mongoose.connect(DB).then(() => {
//   console.log(`connection successful with notesForYouDB`);
// }).catch((err) => console.log(`no connection`));


 connectToMongo();
const app = express()
// const port = 5000
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

//Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`NotesForYou Backend listening on port ${port}`)
})
