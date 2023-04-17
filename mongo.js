// const moongoose = require("mongoose");
const moongoose = require("mongoose");
moongoose
  .connect("mongodb://localhost:27017/accubalance")
  .then(() => {
    console.log("mongo db connected");
  })
  .catch((e) => {
    console.log(e);
    console.log("failed");
  });

const newschema = new moongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const collection = moongoose.model("collection", newschema);
module.exports = collection;
