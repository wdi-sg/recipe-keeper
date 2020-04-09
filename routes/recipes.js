const express = require('express');

const router = express.Router();

//
router.get('/recipes/', (req, res) => {
    res.send('See all the recipes');
} )

router.get('/recipes/new', (req, res) => {
    res.send('Display the form for a single recipe');
})

router.get('/recipes/:id/edit', (req, res) => {
    res.send('Display the form for editing a single recipe');
})

router.get('/recipes/:id', (req, res) => {
    res.send('Show a single recipe');
})

// router.put('/recipes/:id', (req, res) => {

            // })



module.exports = router;