const express = require("express");
const router = express.Router();
const itemRoutes = require("./apis/items");
const userRoutes = require("./apis/users");
const tweetRoutes = require("./apis/tweets");

router.use("/api/v1", itemRoutes);
router.use("/api/v1", userRoutes);
router.use("/api/v1", tweetRoutes);

module.exports = router;
