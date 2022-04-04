const mongoose = require('mongoose')
const threadsSchema = new mongoose.Schema({
   rubrik: {
      type: String,
       required: true
    },
    svar: [String
       //{ type: String }
       //required: true
    ],
    like: {
        type: String,
       required: true
    }
})
module.exports = mongoose.model('Thread', threadsSchema)
 