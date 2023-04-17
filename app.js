const express = require("express");
const collections = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/login", cors(), (req, res) => {});
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const check = await collections.findOne({ username: username });
    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
    }
  } catch (e) {
    res.json("notexist");
  }
});

app.post("/signup", async (req, res) => {
  const { email, username, password, name } = req.body;
  const data = {
    email: email,
    password: password,
    username: username,
    name: name,
  };
  try {
    const check = await collections.findOne({ email: email });
    if (check) {
      res.json("already exist");
    } else {
      res.json("not exist");
      await collections.insertMany([data]);
    }
  } catch (e) {
    res.json("notexist");
  }
});

app.listen(8000, () => {
  console.log("port connected to 8000");
});
