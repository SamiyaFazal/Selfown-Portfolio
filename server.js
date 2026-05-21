// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const mysql = require("mysql2");

// const app = express();

// // MIDDLEWARE

// app.use(cors());

// app.use(express.json());

// // MYSQL CONNECTION


// const db = mysql.createConnection(process.env.DATABASE_URL);

// // CONNECT DATABASE

// db.connect((err) => {

//   if (err) {

//     console.log("❌ MySQL Connection Error");

//     console.log(err);

//   }

//   else {

//     console.log("✅ MySQL Connected");

//   }

// });

// // HOME ROUTE

// app.get("/", (req, res) => {

//   res.send("Backend Running");

// });

// // GET BLOGS

// app.get("/api/blogs", (req, res) => {

//   const sql = "SELECT * FROM Blog";

//   db.query(sql, (err, result) => {

//     if (err) {

//       return res.status(500).json(err);

//     }

//     res.json(result);

//   });

// });

// // SERVER

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {

//   console.log(`🚀 Server running on port ${PORT}`);

// }); 

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

// MIDDLEWARE

app.use(cors());
app.use(express.json());

// MYSQL CONNECTION

const db = mysql.createConnection(process.env.DATABASE_URL);

// CONNECT DATABASE

db.connect((err) => {
  if (err) {
    console.log("❌ MySQL Connection Error");
    console.log(err);
  } else {
    console.log("✅ MySQL Connected");
  }
});

// HOME ROUTE

app.get("/", (req, res) => {
  res.send("Backend Running");
});

// GET BLOGS

app.get("/api/blogs", (req, res) => {
  const sql = "SELECT * FROM Blog";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json(result);
  });
});

// SERVER

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});