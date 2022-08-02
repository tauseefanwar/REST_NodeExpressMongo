const express = require("express");
const router = express.Router();
const DBSchema = require("../model/schema");

router.get("/", async (req, res) => {
  try {
    const info = await DBSchema.find();
    res.json(info);
  } catch (error) {
    res.send(error);
  }
});


router.get("/:id", async (req, res) => {
  try {
    const info = await DBSchema.findById(req.params.id);
    res.json(info);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
  const info = new DBSchema({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub
  })

  try {
    const a1 = await info.save();
    res.json(a1);

  } catch (error) {
    res.send("error: ", error)
  }
});

module.exports = router;
