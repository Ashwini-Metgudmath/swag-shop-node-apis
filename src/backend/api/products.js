const express = require('express');
const productRouter = express.Router();

const knex = require("../database");


productRouter.get("/", async (request, response) => {
  try {
    const products = await knex.select('*').table('product');
    response.json(products);
    //console.log(`meals: ${meals}`)
  } catch (error) {
    throw error;
  }
});


module.exports = productRouter;