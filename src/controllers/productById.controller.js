const db = require('../config/db.config');

const productById = (req, res) => {
    db.query('select * from products where id=?', [req.body.id], (err, result)=>{
        if(err){
            const msg = {
                'msg': 'No Data Found...'
            }
            res.status(500).send(msg);
        } else {
            res.status(200).send(result);
        }
    })
};

module.exports = {
    productById
}