var express = require('express');
var router = express.Router();
var db = require('../databaseConnection.js')

/* GET users listing. */
router.get('/all', function(req, res, next) {
  db.query('SELECT * FROM products', (error, result) => {
    if ( error ) {
      console.log(`Error occured : ${error}`);
    }
    res.status(200).send({ products: result })
  })
});

router.get('/:id', function(req, res, next) {
  db.query(`SELECT * FROM products WHERE id = ${req.params['id']}`, (error, result) => {
    if ( error ) {
      console.log(`Error occured : ${error}`);
    }
    console.log(result.id)
    res.status(200).send({ product: result })
  })
});

module.exports = router;
