const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const transactionsView = require("./routes/transactions.js");
// const loginView = require("./routes/login.js");
if (process.env.node !== "production") {
  require("dotenv").config();
}

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.get(transactionsView)
app.use("/transactions", transactionsView);
// app.use("/login", loginView);


// db connection
mongoose
  .connect('mongodb+srv://jenareis:Password123@cluster0.cvz5i.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`nomming on port ${PORT}`));
