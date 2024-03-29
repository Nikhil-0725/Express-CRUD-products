const db = require('../config/db.config');

const updateProduct = (req, res) => {
    db.query('update products set name=?, qty=? where id=?', [req.body.name, req.body.qty, req.body.id], (err, result) => {
        if(result.affectedRows === 0){
            const msg = {
                'msg' : 'Data Not Updated due to wrong id'
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