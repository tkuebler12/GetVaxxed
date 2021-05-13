const router = require("express").Router();
const locationRoutes = require("./locationAPI");

router.use("/locationAPI", locationRoutes);

module.exports = router;