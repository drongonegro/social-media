import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Post from "../models/post.model.js"

export const getUsers = async (req,res) => {
	try{
		const users = await User.find()
		return res.status(200).json(users)
	}catch(err){
		return res.status(404).json("users not found")
	}
}

export const getUserPosts = async (req,res) => {
	try{
		const posts = await Post.find({author:req.params.userId})
			.populate({path:"author", select:["username","pfp"]})
			.populate("likes")
		return res.status(200).json(posts)
	}catch(err){
		return res.status(404).json("posts not found")
	}
}

export const getUser = async (req,res) => {
	try{
		const { userId } = req.params
		const user = await User.findById(userId)

		res.status(200).json(user)
		
	}catch(err) {
		return res.status(404).json("user not found")
	}
}


export const register = async (req,res) => {
	const user = req.body

	try{
		const salt = await bcrypt.genSalt()
		const hashedPass = await bcrypt.hash(user.password,salt)

		const createdUser = await User.create({
			...user,
			password:hashedPass,
		})
		res.status(200).json(createdUser)
	}catch(err){
		res.status(401).json("could not register, please try again")
	}
}

export const login = async (req,res) => {
	const {username,password} = req.body
	const usernameOk = await User.findOne({username})
	if(!usernameOk) return res.status(400).json("no user");

	const passOk = await bcrypt.compare(password,usernameOk.password)
	if(!passOk) return res.status(400).json("wrong pass")

	if(usernameOk && passOk){
		const token = await jwt.sign({id:usernameOk._id,username:usernameOk.username},process.env.JWT_SECRET)

		res.status(200).json({token,username:usernameOk.username,pfp:usernameOk.pfp,id:usernameOk._id})
	}
}