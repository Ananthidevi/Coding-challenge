const express = require("express");
require("dotenv").config();
const productRoutes = require("./routes/ProductRoutes");


const app = express();

app.use(express.json());
app.use(productRoutes);


app.listen(process.env.port,() => {
    console.log(`server running on ${process.env.port}`);

});
    //folder pattern
    //config-> module -> controller -> (middleware) ->routes -> index.js