require('dotenv').config()
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 3,
    required: true,
  },
  author: String,
  content: {
    type: String,
    required: true,
  },
  image: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  date: Date,
})

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Blog', blogSchema)
