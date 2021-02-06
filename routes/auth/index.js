const router = require("express").Router();
const githubRoutes = require("./github");

router.use("/github", githubRoutes);

module.exports = router;