const express = require('express');
const router = express.Router();
const Link = require('../models/link');
const shortid = require('shortid');

let APP_LINK = 'localhost:3000';

if (process.env.NODE_ENV === 'production') {
    APP_LINK = process.env.APP_LINK;
}

router.post('/short', async (req, res) => {
    const {link} = req.body;

    try {
        let  url = await Link.findOne({link});

        if (url){
            return res.json(url);
        }

        const code = shortid.generate();
        const shortUrl = `${APP_LINK}/links/${code}`;
        url = new Link({
            code,
            source: link,
            short: shortUrl
        });
        await url.save();
        return res.json(url);
    }catch (e) {
        return res.status(500).json({status: 500, message: JSON.stringify(e)});
    }

    //check in db
    //if yes - return existing link
    //if no
    //generate new shortid
    //save in db and return
});

router.get('/:code', async (req, res) => {

    //find code in db
    //if exists - redirect using link
    //if no - return 404
    const {code} = req.params;

    const link = await Link.findOne({code});
    if (link){
        return res.redirect(link.source);
    }
    return res.status(404).json({status: 404, message: 'Link not found'});

});

module.exports = router;