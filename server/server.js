const express = require("express");
const app = express();
const port = 6200;

app.get("/api", (req, res) => {
  res.json({ users: ["akhil", "adithya"] });
});

app.get("/dogs/pitcures", (req, res) => {
  res.json();
});

app.get("/api/users", (req, res) => {
  res.json({ akhil: "UI", adithya: "UI" });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
