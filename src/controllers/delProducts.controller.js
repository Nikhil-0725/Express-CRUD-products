const db = require('../config/db.config')

const delProducts = (req, res) => {
    db.query("delete from products where id=?", [req.body.id], (err, result) => {
        if (result.affectedRows !== 0) {
            res.status(200).send(result);
        } else {
            const data = {
                'msg': 'not deleted by id error : ' + err
            }
            res.status(500).send(data);
        }
    });
};

module.exports = {
    delProducts
}