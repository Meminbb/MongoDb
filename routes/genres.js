const express = require("express");
const router = express.Router();

const connectDB = require("../db/mongo");


// GET ALL
router.get("/", async (req, res) => {
  const db = await connectDB();

  const genres = await db.collection("genres").find().toArray();

  res.json(genres);
});


// CREATE
router.post("/", async (req, res) => {
  const db = await connectDB();

  const genre = req.body;

  await db.collection("genres").insertOne(genre);

  res.json({ message: "Genre created" });
});


// UPDATE
router.put("/:id", async (req, res) => {
  const db = await connectDB();

  const id = parseInt(req.params.id);

  await db.collection("genres").updateOne(
    { _id: id },
    {
      $set: req.body
    }
  );

  res.json({ message: "Genre updated" });
});


// DELETE
router.delete("/:id", async (req, res) => {
  const db = await connectDB();

  const id = parseInt(req.params.id);

  // Verificar si el género está en películas
  const movieUsingGenre = await db.collection("movies").findOne({
    genres: req.query.name
  });

  if (movieUsingGenre) {
    return res.status(400).json({
      message: "Cannot delete genre because it is used by movies"
    });
  }

  await db.collection("genres").deleteOne({ _id: id });

  res.json({ message: "Genre deleted" });
});

module.exports = router;