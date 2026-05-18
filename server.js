const express = require("express");
const cors = require("cors");
require("dotenv").config();

const moviesRoutes = require("./routes/movies");
const genresRoutes = require("./routes/genres");
const customersRoutes = require("./routes/customers");
const salesRoutes = require("./routes/sales");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/movies", moviesRoutes);
app.use("/api/genres", genresRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/sales", salesRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});