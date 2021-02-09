const router = require('express').Router();
const apiRoutes = require('./api');
const path = require("path")

router.use("/api", apiRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;