const router = require("express").Router();
const postRoutes = require("./post");
const postDataRoutes = require("./postData");
const userRoutes = require("./user");

router.use("/post", postRoutes);
router.use("/postData", postDataRoutes);
router.use("/user", userRoutes);


module.exports = router;