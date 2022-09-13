// const Transaction = require("../models/transactionsType.js");

// const getTransaction = async (req, res) => {
//   try {
//     const getTransactions = await Transaction.find();
//     res.status(200).json(getTransactions);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// const createTransaction = async (req, res) => {
//   const transaction = req.body;

//   const newTransaction = new getTransaction(transaction);

//   try {
//     await newTransaction.save();
//     res.status(201).json(newTransaction)
//   } catch (error) {
//     res.status(409).json({ message: error.message})
//   }
// };

// module.exports = getTransaction(), createTransaction()