const express = require("express");
const cors = require('cors');

const bodyParser = require('body-parser');
const loginRouter = require('./src/routes/product.routes');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.use(loginRouter);

app.listen(9000, ()=>{
    console.log("App Listning On 9000 port");
})