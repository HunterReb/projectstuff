const express = require("express");
const transactionsService = require("../services/transservice");

const transRouter = express.Router();

transRouter.get("/transactions", (req, res) => {
  const transactions = transactionsService.selectAll();
  res.json(transactions);
});

transRouter.get("/transactions/:id", (req, res) => {
  const id = Number(req.params.id);
  const transaction = transactionsService.selectOneById(id);
  res.json(transaction);
});

transRouter.post("/transactions", (req, res) => {
  const transactionToAdd = req.body;
  transactionsService.insertOne(transactionToAdd);
  res.sendStatus(201);
});

transRouter.delete("/transactions/:id", (req, res) => {
  const id = Number(req.params.id);
  transactionsService.deleteOne(id);
  res.sendStatus(204);
});

transRouter.put("/transactions/:id", (req, res) => { 
  const id = Number(req.params.id);
  const updatedTransaction = req.body;
  transactionsService.updateOne(id, updatedTransaction);
  res.sendStatus(204);
});

module.exports = transRouter;