const express = require("express");
const dataRouter = express.Router();
const dataController = require("../controllers/dataController");

//CREATE PRODUCT
dataRouter.get("/", dataController.fetchDataById);
dataRouter.post("/create", dataController.createSourceCode);


module.exports = dataRouter;