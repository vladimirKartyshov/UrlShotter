const express = require('express');
const router = express.Router();

router.post('/short', (req, res) => {
    const {link} = req.body;

    //check in db
    //if yes - return existing link
    //if no
    //generate new shortid
    //save in db and return
});

router.get('/:code', (req, res) => {

    //find code in db
    //if exists - redirect using link
    //if no - return 404
});

module.exports = router;