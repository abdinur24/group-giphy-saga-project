const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM favorites ORDER BY name ASC`;
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post('/', (req, res) => {
  const newFav = req.body;
  const queryText = `INSERT INTO favorites ("id") VALUES ($1);`
  pool.query(queryText, [newFav.id])
    .then(response => {
      res.sendStatus(201)
      console.log('ADDING NEW FAV', newFav);
    }).catch(err => {
      res.sendStatus(500);
      console.log('ERROR IN POST', err)
    });

});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  const favId = req.params.id;
  console.log(`Updating fav with an id of ${favId}`);
  const queryText = `UPDATE favorites SET "category_id" WHERE id=$1;`
  pool.query(queryText, [favId])
  .then(response => {
    res.sendStatus(201)
    console.log('UPDATING FAV', favId);
  }).catch(err => {
    res.sendStatus(500);
    console.log('ERROR IN POST', err)
  });
  // req.body should contain a category_id to add to this favorite image
});

// delete a favorite
router.delete('/', (req, res) => {
  const favId = req.params.id;
  console.log(`DELETING fav with an ID of ${favId}`);
  const queryText = `DELETE FROM favorites WHERE id=$1;`
  pool.query(queryText, [favId])
  .then(response => {
    res.sendStatus(201)
    console.log('DELETING FAV', favId);
  }).catch(err => {
    res.sendStatus(500);
    console.log('ERROR IN POST', err)
  });
});

module.exports = router;
