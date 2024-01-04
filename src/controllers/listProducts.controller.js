const db = require('../config/db.config');

const home = (req,res) => {
    const data = {
        "mesg":"Welcome to Product World"
    }
    res.status(200).send(data);
}

const listProduct = (req, res) => {
    db.query("select * from products", (err, data, fields)=>{
        if(err){
            res.status(500).send("no data found");
        }
        else{
            console.log(data);
            console.log(fields);
            res.status(200).send(data);
        }
    })
}; 

module.exports ={
    listProduct,
    home
}