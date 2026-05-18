const express = require("express");
const router = express.Router();

const connectDB = require("../db/mongo");


// GET ALL + SEARCH
router.get("/", async (req, res) => {
  const db = await connectDB();

  const search = req.query.search || "";

  const movies = await db.collection("movies")
    .find({
      title: {
        $regex: search,
        $options: "i"
      }
    })
    .toArray();

  res.json(movies);
});


// CREATE
router.post("/", async (req, res) => {
  const db = await connectDB();

  await db.collection("movies").insertOne(req.body);

  res.json({ message: "Movie created" });
});


// UPDATE
router.put("/:id", async (req, res) => {
  const db = await connectDB();

  const id = parseInt(req.params.id);

  await db.collection("movies").updateOne(
    { _id: id },
    {
      $set: req.body
    }
  );

  res.json({ message: "Movie updated" });
});


// DELETE
router.delete("/:id", async (req, res) => {
  const db = await connectDB();

  const id = parseInt(req.params.id);

  await db.collection("movies").deleteOne({
    _id: id
  });

  res.json({ message: "Movie deleted" });
});

module.exports = router;