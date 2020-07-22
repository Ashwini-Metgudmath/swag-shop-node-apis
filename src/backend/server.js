const express = require('express');
app = express();
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();

const productRouter = require('./api/products');
//const reviewsRouter = require('./apis/wishlist');

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
  });

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/products', productRouter);





app.listen(PORT, (err) =>{
    if(err){
        console.log(err);
    }
    else
    console.log(`Swag-shop API running at port: ${PORT}`);
})