const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {getCompliment, getFortune, postUserDetails, putForgotPassword, deleteUser } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post("/api/userDetails", postUserDetails) 
app.put("/api/newPassword", putForgotPassword)
app.delete("/api/deleteUser", deleteUser)

app.listen(4000, () => console.log("Server running on 4000"));
