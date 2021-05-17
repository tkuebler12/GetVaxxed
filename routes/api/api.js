const router = require("express").Router();
const locationRoutes = require("../../models/user");

router.use("/locationAPI", locationRoutes);

module.exports = router;