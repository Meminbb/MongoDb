const express = require("express");
const router = express.Router();

const connectDB = require("../db/mongo");


// GET ALL + SEARCH
router.get("/", async (req, res) => {
  const db = await connectDB();

  const search = req.query.search || "";

  const customers = await db.collection("customers")
    .find({
      first_name: {
        $regex: search,
        $options: "i"
      }
    })
    .toArray();

  res.json(customers);
});


// CREATE
router.post("/", async (req, res) => {
  const db = await connectDB();

  await db.collection("customers").insertOne(req.body);

  res.json({ message: "Customer created" });
});


// UPDATE
router.put("/:id", async (req, res) => {
  const db = await connectDB();

  const id = parseInt(req.params.id);

  await db.collection("customers").updateOne(
    { _id: id },
    {
      $set: req.body
    }
  );

  res.json({ message: "Customer updated" });
});


// DELETE
router.delete("/:id", async (req, res) => {
  const db = await connectDB();

  const id = parseInt(req.params.id);

  await db.collection("customers")
    .deleteOne({ _id: id });

  res.json({ message: "Customer deleted" });
});

module.exports = router;