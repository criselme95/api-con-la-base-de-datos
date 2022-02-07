const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM personal', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log('err', err);
        }
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM personal WHERE id = ?', [id], (err, rows, fields) => {
        if (!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.post('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM personal', (err, rows, fields )=> {
        if (!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM personal WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'User deleted'});
        } else {
            console.log(err);
        }
    });
});


module.exports = router;