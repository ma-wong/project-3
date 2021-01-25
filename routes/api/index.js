const router = require("express").Router();
const postRoutes = require("./post");
const postDataRoutes = require("./postData");
const userRoutes = require("./user");
const commentRoutes = require("./comment")

router.use("/post", postRoutes);
router.use("/postdata", postDataRoutes);
router.use("/user", userRoutes);
router.use("/comment", commentRoutes);


module.exports = router;