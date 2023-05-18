const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
const router = express.Router();
const bodyParser = require('body-parser');

app.use(cors());
app.use("/", router);

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

mongoose.connect("mongodb://127.0.0.1:27017/generations", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

const generations = new mongoose.Schema({
  coords: {
    type: String
  },
});

const model = mongoose.model("generation", generations);

router.get('/generations', async (req, res) => {
  const gens = await model.find({});
  try {
    res.send(gens);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/store", jsonParser, async (req, res) => {
	console.log(req.body);
    const store = new model({coords: req.body.coords});
    try {
        let result = await store.save();
        if (result) {
            res.status(200).json(result);
            console.log(result);
        } else {
            console.log("Something went wrong");
        }
 
    } catch (e) {
        res.status(500).send(e);
    }
});