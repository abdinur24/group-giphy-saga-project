const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `
    SELECT 
      "favorites"."id", 
      "favorites"."images",
      "favorites"."category_id",
      "category"."name" AS "category_name"
     FROM favorites 
    LEFT JOIN "category" ON "category"."id"="favorites"."category_id"
    ORDER BY "favorites".category_id ASC`;
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
  console.log(req.body)
  const newFav = req.body.url;
  const queryText = `INSERT INTO favorites ("images") VALUES ($1);`
  pool.query(queryText, [newFav])
    .then(response => {
      res.sendStatus(201)
      console.log('ADDING NEW FAV', newFav);
    }).catch(err => {
      res.sendStatus(500);
      console.log('ERROR IN POST', err)
    });

});

// update given favorite with a category id
router.put('/:favId/:catId', (req, res) => {
  const favId = req.params.favId;
  const catId = req.params.catId;
  console.log(`Updating fav with an id of ${favId}`);
  const queryText = `UPDATE favorites SET "category_id"=$1 WHERE id=$2;`
  pool.query(queryText, [catId, favId])
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
