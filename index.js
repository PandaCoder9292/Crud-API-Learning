const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

// A listener to just listen what is going on , is our server is connected
app.listen(3000, () => {
  console.log("Server running at port 3000");
});

// A simple get (not to fetch anything)
app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

// A GET to get all the times of the database (table) ---->  [NOW IN ROUTER and CONTROLLER FILES]
// app.get("/api/products", async (req, res) => {
//   try {
//     const product = await Product.find({});
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// To GET a specific id's product we use :id  ---->  [NOW IN ROUTER and CONTROLLER FILES]
// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// For POST method -> helps to SAVE the posted data  ---->  [NOW IN ROUTER and CONTROLLER FILES]
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// TO UPDATE a porduct with PUT  ---->  [NOW IN ROUTER and CONTROLLER FILES]
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.status(404).json({ message: "Product not Found !!!" });
//     }
//     const updatedProd = await Product.findById(id);
//     res.status(200).json(updatedProd);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// To DELETE a Product we use delete  ---->  [NOW IN ROUTER and CONTROLLER FILES]
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       res.status(404).json({ message: "Product not Found !!! " });
//     }
//     res.status(200).json({ message: "Product Deletion Success" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// Tekes help of mongoose to connect to our MongoDB (mongoose helps to connect our Express and MongoDB)
mongoose
  .connect(
    "mongodb+srv://gargpranshuwork92_db_user:Yux4qHE3uHQiH0wm@backeddb.4dvti2b.mongodb.net/Node-API?appName=BackedDB",
  )
  .then(() => {
    console.log("Connected to Database");
  })
  .catch(() => {
    console.log("Connection Failed !");
  });
