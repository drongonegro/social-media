import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

import user from "./routes/user.route.js"
import post from "./routes/post.route.js"

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URL)

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/user",user)
app.use("/api/post",post)

app.listen(6969,() => console.log("running"))