const mongoose = require('mongoose')
const threadsSchema = new mongoose.Schema({
   rubrik: {
      type: String,
       required: true
    },
    svar: 
       { type: String,
       required: true
   },
    like: {
        type: Number,
       required: true
    }
})
module.exports = mongoose.model('Thread', threadsSchema)
 