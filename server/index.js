const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {getCompliment, getFortune, createDog, putForgotPassword, deleteUserDetails } = require('./controller')

app.get("/api/compliment", getCompliment)
app.get("/api/fortune", getFortune)
app.post("/api/dogDetails", createDog) 


app.listen(4000, () => console.log("Server running on 4000"));