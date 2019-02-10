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

router.get("/:candyId", async (req, res, next) => {
  try {
    const selectedCandy = await Candies.findById(req.params.candyId);
    res.send(selectedCandy);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
