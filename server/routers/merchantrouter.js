const express = require("express");
const merchantService = require("../services/merchantservice")

const merchantsRouter = express.Router();

// Index - get all the merchants
merchantsRouter.get("/merchants", (req, res) => {
  const merchants = merchantService.selectAll();
  res.json(merchants);
});

// Show - get one merchant by id
merchantsRouter.get("/merchants/:id", (req, res) => {
  const id = Number(req.params.id);
  const merchant = merchantService.selectOneById(id);
  res.json(merchant);
});

// Create - add a merchant
merchantsRouter.post("/merchants", (req, res) => {
  const merchantToAdd = req.body;
  merchantService.insertOne(merchantToAdd);
  res.sendStatus(201);
});

// Destroy - delete a merchant
merchantsRouter.delete("/merchants/:id", (req, res) => {
  const id = Number(req.params.id);
  merchantService.deleteOne(id);
  res.sendStatus(204);
});

// Update - replace a merchant
// PUT
// id matters
// body to describe how merchant should look now
// updateOne on merchantsService
// 204
merchantsRouter.put("/merchants/:id", (req, res) => { // Why : before id
  const id = Number(req.params.id);
  const updatedMerchant = req.body;
  merchantService.updateOne(id, updatedMerchant);
  res.sendStatus(204);
});

module.exports = merchantsRouter;