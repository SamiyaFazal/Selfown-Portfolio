// const express = require("express");
// const cors = require("cors");
// const sql = require("mssql/msnodesqlv8");

// const app = express();

// // MIDDLEWARE
// app.use(cors());
// app.use(express.json());

// // DATABASE CONNECTION
// const config = {
//   connectionString:"Driver={ODBC Driver 18 for SQL Server};Server=localhost;Database=BlogApp;Trusted_Connection=Yes;TrustServerCertificate=yes;Encrypt=no;",
// };

// // CONNECT DATABASE
// sql.connect(config)
//   .then(() => {
//     console.log("✅ SQL Connected Successfully");
//   })
//   .catch((err) => {
//     console.log("❌ Database Connection Error");
//     console.log(err);
//   });

// // HOME ROUTE
// app.get("/", (req, res) => {
//   res.send("Backend Running...");
// });

// // GET BLOGS
// app.get("/api/blogs", async (req, res) => {

//   try {

//     const result = await sql.query(`
//       SELECT * FROM Blog
//     `);

//     res.status(200).json(result.recordset);

//   } catch (error) {

//     console.log(error);

//     res.status(500).json({
//       message: error.message,
//     });

//   }

// });

// // SERVER
// const PORT = 5000;

// app.listen(PORT, "0.0.0.0", () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// MIDDLEWARE

app.use(cors());

app.use(express.json());

// MONGODB CONNECTION

mongoose.connect(process.env.MONGO_URL)

.then(() => {

  console.log("✅ MongoDB Connected");

})

.catch((err) => {

  console.log("❌ MongoDB Error");

  console.log(err);

});

// BLOG SCHEMA

const blogSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  authorName: {
    type: String,
    required: true,
  },

  authorImage: {
    type: String,
    required: true,
  },

  publishDate: {
    type: String,
    required: true,
  },

});

// MODEL

const Blog = mongoose.model("Blog", blogSchema);

// HOME ROUTE

app.get("/", (req, res) => {

  res.send("Backend Running Successfully");

});

// GET BLOGS

app.get("/api/blogs", async (req, res) => {

  try {

    const blogs = await Blog.find();

    res.status(200).json(blogs);

  }

  catch (error) {

    res.status(500).json({

      message: error.message,

    });

  }

});

// ADD BLOG

app.post("/api/blogs", async (req, res) => {

  try {

    const blog = await Blog.create(req.body);

    res.status(201).json(blog);

  }

  catch (error) {

    res.status(500).json({

      message: error.message,

    });

  }

});

// SERVER

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`🚀 Server running on port ${PORT}`);

});