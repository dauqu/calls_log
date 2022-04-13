const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//Allow JSON
app.use(express.json());

const DB = require("./db");
DB();

app.get("/", (req, res) => {
  res.send("Calls LOG API");
});

app.use("/api/v1/pushcalllog", require("./routes"));

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
