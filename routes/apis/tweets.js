const express = require('express');
const router = express.Router();

const User = require('../../src/models/User');
const Tweet = require('../../src/models/Tweet');

// get all
router.get('/tweets', async (req, res) => {
    const tweets = await Tweet.findAll({include: [{model: User, as: 'author'}]});
    return res.json(tweets);
});

// create
router.post('/tweets', async (req, res) => {
    let {content} = req.body;
    let defaultId = 1;
    const tweet = await Tweet.create({
        content: content,
        author_id: defaultId
    });
    return res.json(tweet);
});


// show
router.get('/tweets/:id', async (req, res) => {
    let {id} = req.params;
    const tweet = await Tweet.findByPk(id, {
        include: {model: User, as: "author"}
    });
    if (tweet) {
        return res.json(tweet);
    }
    return res.status(404).json({
        status: 404,
        message: "not found"
    })
});

// destroy
router.delete('/tweets/:id', async (req, res) => {
    let {id} = req.params;
    let delTweet = await Tweet.destroy({where: {id}});
    if (delTweet) {
        return res.status(200).json({
            status: 200,
            message: "delete success"
        });
    }
    return res.status(404).json({
        status: 404,
        message: "not found"
    })
});
module.exports = router;