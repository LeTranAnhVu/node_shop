const express = require('express');
const router = express.Router();

const User = require('../../src/models/User');
const Tweet = require('../../src/models/Tweet');


router.get('/users', async (req, res) => {
    const users = await User.findAll({include: [{model: Tweet, as: 'tweets'}]});
    return res.json(users);
});

router.get('/users/:id', async (req, res) => {
    const {id} = req.params;
    const users = await User.findByPk(id,{
        include: [{model: Tweet, as: 'tweets'}],
    });
    return res.json(users);
});

module.exports = router;