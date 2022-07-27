const express = require("express");
const tagsService = require("../services/tagservice")

const tagsRouter = express.Router();

tagsRouter.get("/tags", (req, res) => {
  const tags = tagsService.selectAll();
  res.json(tags);
});

tagsRouter.get("/tags/:id", (req, res) => {
  const id = Number(req.params.id);
  const tag = tagsService.selectOneById(id);
  res.json(tag);
});

tagsRouter.post("/tags", (req, res) => {
  const tagToAdd = req.body;
  tagsService.insertOne(tagToAdd);
  res.sendStatus(201);
});

tagsRouter.delete("/tags/:id", (req, res) => {
  const id = Number(req.params.id);
  tagsService.deleteOne(id);
  res.sendStatus(204);
});

tagsRouter.put("/tags/:id", (req, res) => { 
  const id = Number(req.params.id);
  const updatedTag = req.body;
  tagsService.updateOne(id, updatedTag);
  res.sendStatus(204);
});

module.exports = tagsRouter;