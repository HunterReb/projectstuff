const express = require("express");
const cors = require("cors");
const merchantsRouter = require("./routers/merchantrouter");
const tagsRouter = require("./routers/tagrouter");
const transRouter = require("./routers/transrouter");

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api", merchantsRouter)
app.use("/api", tagsRouter)
app.use("/api", transRouter)

app.get("/", (req, res) => {
  res.send("<h1>I am the homepage</h1>")
})

app.listen(9000, () => {
  console.log("Server started on port 9000")
})