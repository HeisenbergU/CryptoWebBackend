const express = require("express");
require("dotenv").config(); 
require("./src/config/db");  
const routes = require("./src/routes/routes");
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());

app.use(express.json());
app.use(cors());
app.use("/api", routes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}!`);
});
