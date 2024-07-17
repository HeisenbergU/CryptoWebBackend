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


app.post('/api/login', (req, res) => {
  const { name, password } = req.body;

  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (name === adminUsername && password === adminPassword) {
    res.status(200).send({ authenticated: true });
  } else {
    res.status(401).send({ authenticated: false });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}!`);
});
