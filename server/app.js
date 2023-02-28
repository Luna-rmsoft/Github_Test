const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req, res) => res.send("Hello World!~~ "));

const port = 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));