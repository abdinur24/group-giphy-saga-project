const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM category ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});



// axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_A_KEY}}&q=&limit=25&offset=0&rating=g&lang=en`
// )
// .then((response)=>{
//     res.send(response.data)
// }).catch((err)=>{
//     res.sendStatus(500);
//     console.error('error in server get', err)
// })
// });

module.exports = router;
