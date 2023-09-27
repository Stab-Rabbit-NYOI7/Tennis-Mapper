const mongoose = require('mongoose');
const { Schema } = mongoose;

MONGO_URI = `mongodb+srv://tbensalem:MAu62uCj2A7Xtw6a@cluster0.5bkrdhz.mongodb.net/?retryWrites=true&w=majority`

// DB CONNECTIONS
mongoose.connect(MONGO_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true 
  })

const db = mongoose.connection;

  db.on('error', (err) => {
    console.error(`connection error: ${err}`)
  })
  db.once('open', (err, response) => {
    console.log(`Connected to Database, Response: ${response}`)
  })

// SCHEMAS
const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true },
  // _id: {type: String, unique: true},
})

const User = mongoose.model('user', userSchema)

const googleUserSchema = new Schema({
  email: {type: String, required: true, unique: true},
  name: {type: String, required: true},
})

const GoogleUser = ('googleUser', googleUserSchema)



module.exports = {
  User,
  GoogleUser
};