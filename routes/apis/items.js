const express = require('express');
const router = express.Router();


router.get('/items', (req, res) => {
    return res.json([
        {
            id: 1,
            name: 'le tran anh vu'
        },
        {
            id: 2,
            name: 'pham thi thu trang'

        }
        ]);
});

module.exports = router;