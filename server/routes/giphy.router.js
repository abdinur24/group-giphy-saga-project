const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');


// GIPHY axios GET
router.get('/', (req, res) => {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.body}`).
        then((response) => {
            console.log('this is', req.body.data)
            console.log(response)
            res.send(response.data);
        }).catch(error => {
            console.log('ERROR in GET gif', error);
            res.sendStatus(500);
        }); // Replace this
})








module.exports = router;