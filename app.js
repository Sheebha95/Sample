const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employee");
const requireAuth = require("./middleware/auth")

const port = 5000;
// const Product = require("./models/Product");
// const Seller = require("./models/Seller");
// const Customer = require("./models/Customer");

const app = express();
app.use(cors());
app.use(bodyParser.json());
//This built-in middleware was added in Express version 4.16.0 to simplify request body parsing
// app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://ranisheebha:Its123@cluster0.d4u9mqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

  app.use('/api/products', productRoutes);
  app.use('/api/auth', authRoutes);
  app.use("api/employee", requireAuth, employeeRoutes);


// app.post("/product", async (req, res) => {
//     try {
//       // const { title, description, completed } = req.body;
//       // const newTodo = new Todo({
//       //   title,
//       //   description,
//       //   completed,
//       // });
//       console.log("Hello")
//       const newProduct = new Product(req.body);
//       await newProduct.save();
//       res.status(201).json({ message: "todo has been creted", newProduct : newProduct });
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   });

//   // GET route to fetch all Todos
//   app.get("/products", async (req, res) => {
//     try {
//       const products = await Product.find(); //{ghgfhwefwgfjhwgj}
  
//       res.json(products);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });

//   //POST & GET for Seller Details
//   app.post("/seller", async (req, res) => {
//     try {
//       // const { title, description, completed } = req.body;
//       // const newTodo = new Todo({
//       //   title,
//       //   description,
//       //   completed,
//       // });
//       //console.log("Hello")
//       const newSeller = new Seller(req.body);
//       await newSeller.save();
//       res.status(201).json({ message: "todo has been creted", newSeller : newSeller });
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   });

//   // GET route to fetch all Todos
//   app.get("/sellers", async (req, res) => {
//     try {
//       const sellers = await Seller.find(); //{ghgfhwefwgfjhwgj}
  
//       res.json(sellers);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });

//   //POST & GET for Customer Details
//   app.post("/customer", async (req, res) => {
//     try {
//       // const { title, description, completed } = req.body;
//       // const newTodo = new Todo({
//       //   title,
//       //   description,
//       //   completed,
//       // });
//       //console.log("Hello")
//       const newCustomer = new Customer(req.body);
//       await newCustomer.save();
//       res.status(201).json({ message: "todo has been creted", newCustomer : newCustomer });
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   });

//   // GET route to fetch all Todos
//   app.get("/customers", async (req, res) => {
//     try {
//       const customers = await Customer.find(); //{ghgfhwefwgfjhwgj}
  
//       res.json(customers);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

