const db = require("../config/db.config")

const addProducts = (req, res) => {
    console.log(req.body);
    db.query('insert into products values(?, ?, ?)', [req.body.id, req.body.name, req.body.qty], (err, result) => {
        if(err){
            let data = {
                'msg':'No data added '+err,
            }
            res.status(500).send(data);
        }
        else {
            let data = {
                'msg':'Data added succesfully'
            }
            res.status(200).send(data);
        }
    })
};

module.exports = {
    addProducts
}