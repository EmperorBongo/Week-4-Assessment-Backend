const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {getCompliment, getFortune, getDogs, createDog, deleteDog, updateDogName} = require('./controller')
app.get("/api/compliment", getCompliment)
app.get("/api/fortune", getFortune)
app.get("/api/dogs", getDogs)
app.post("/api/dogs", createDog) 
app.put("/api/dogs/:id", updateDogName);
app.delete("/api/dogs/:id", deleteDog)


app.listen(4000, () => console.log("Server running on 4000"));