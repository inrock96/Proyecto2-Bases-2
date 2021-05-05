const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const https = require('https')
const app = express();
const PORT = (process.env.PORT||3000);
app.set('port',PORT);

//CONFIG
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(morgan('dev'))
app.use(cors())

//routes
app.use(require('./routes/reportes'))

app.listen(app.get('port'),'0.0.0.0',()=>{
    console.log(`Node server running on port: ${PORT}`)
})