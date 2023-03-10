import express from "express"
const router = express.Router()

import {login,register,getUsers,getUserPosts,getUser} from "../controllers/user.controller.js"

router.post("/register",register)
router.post("/login",login)
router.get("/getUsers/",getUsers)
router.get("/getUserPosts/:userId",getUserPosts)
router.get("/getUser/:userId",getUser)

export default router;