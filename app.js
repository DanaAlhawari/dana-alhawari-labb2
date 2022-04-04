const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const url = ('mongodb://localhost/forumDb')

const app = express();

mongoose.connect(url, {
    useNewUrlParser: true,
})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded 
app.use(bodyParser.json())// parse application/json 

app.use(cors());
//const forumRouter = require('./routes/thread-route');
//const { response } = require('express');
app.use('/threads', require('./routes/thread-route'))
app.get('/threads',(req, res) => {
    headers ={ "http_status": 200, "cache_control": "no-cache"}
    body= { "status": available }
    res.set('Content-Type', 'application/json');
    res.status(200).send(body)
})


app.listen(3000, () => {
    console.log("listening on port 3000");
})