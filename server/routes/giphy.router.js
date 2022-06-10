const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');


// GIPHY axios GET
router.post('/', (req, res) => {
    const search = req.body.search
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${search}`).
        then((response) => {
            console.log('this is', req.body)
            res.send(response.data);
        }).catch(error => {
            console.log('ERROR in GET gif', error);
            res.sendStatus(500);
        }); // Replace this
})





module.exports = router;