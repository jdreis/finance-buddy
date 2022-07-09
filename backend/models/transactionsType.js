import mongoose from "mongoose";

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
