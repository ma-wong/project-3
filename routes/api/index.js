const router = require("express").Router();
const postRoutes = require("./post");
const postDataRoutes = require("./postData");
const userRoutes = require("./user");
const commentRoutes = require("./comment");
const path = require('path');

router.use("/post", postRoutes);
router.use("/postdata", postDataRoutes);
router.use("/user", userRoutes);
router.use("/comment", commentRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

module.exports = router;