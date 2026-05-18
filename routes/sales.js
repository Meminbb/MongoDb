const express = require("express");
const router = express.Router();

const connectDB = require("../db/mongo");


// =====================
// GET ALL SALES
// =====================
router.get("/", async (req, res) => {

  const db = await connectDB();

  const sales = await db.collection("sales").find().toArray();

  const customers = await db.collection("customers").find().toArray();

  const movies = await db.collection("movies").find().toArray();


  // JOIN manual
  const result = sales.map(sale => {

    const customer = customers.find(
      c => c._id === sale.customerId
    );

    const movie = movies.find(
      m => m._id === sale.movieId
    );

    return {

      ...sale,

      customer_name:
        customer
          ? `${customer.first_name} ${customer.last_name}`
          : "Unknown",

      movie_title:
        movie
          ? movie.title
          : "Unknown"
    };
  });

  res.json(result);
});


// =====================
// CREATE SALE
// =====================
router.post("/", async (req, res) => {

  const db = await connectDB();

  await db.collection("sales").insertOne(req.body);

  res.json({
    message: "Sale created"
  });
});

// =====================
// UPDATE SALE
// =====================
router.put("/:id", async (req, res) => {

  const db = await connectDB();

  const id = parseInt(req.params.id);

  await db.collection("sales").updateOne(

    { _id: id },

    {
      $set: req.body
    }

  );

  res.json({
    message: "Sale updated"
  });
});


// =====================
// DELETE SALE
// =====================
router.delete("/:id", async (req, res) => {

  const db = await connectDB();

  const id = parseInt(req.params.id);

  await db.collection("sales").deleteOne({
    _id: id
  });

  res.json({
    message: "Sale deleted"
  });
});

module.exports = router;