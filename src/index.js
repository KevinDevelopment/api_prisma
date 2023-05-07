require("dotenv").config();
const express = require("express");
const router = require("./routes/routes");
const app = express();
const helmet = require("helmet");


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());
app.use(router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});