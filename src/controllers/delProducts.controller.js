const db = require('../config/db.config')

const delProducts = (req, res) => {
    db.query("delete from products where id=?", [req.body.id], (err, result) => {
        if (!err) {
            const data = {
                'msg': 'deleted succesfully by id'
            }
            res.status(200).send(data);
        } else {
            const data = {
                'msg': 'not deleted by id error : '
            }
            res.status(500).send(data);
        }
    });
};

module.exports = {
    delProducts
}