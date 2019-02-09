const router = require("express").Router();
const { Candies } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const candies = await Candies.findAll();
    res.send(candies);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
