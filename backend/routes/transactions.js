const express = require("express");
const Transaction = require("../models/transactionsType");

const router = express.Router();

router.get("/", async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
});

router.post("/create", async (req, res) => {
  const transactions = await Transaction.create(req.body);
  res.json(transactions);
});

module.exports = router;
