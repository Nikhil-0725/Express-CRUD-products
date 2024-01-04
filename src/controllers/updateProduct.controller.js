const db = require('../config/db.config');

const updateProduct = (req, res) => {
    db.connect('update products set name=?, qty=? where id=?', [req.body.name, req.body.qty, req.body.id], (err, result) => {
        if(err){
            const msg = {
                'msg' : 'Data Not Updated'
            };
            res.status(500).send(msg);
        } else {
            res.status(200).send(result);
        }
    })
};

module.exports={
    updateProduct
}