import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
	},
	password: String,
	pfp: {
		type: String,
		default: "https://i.pinimg.com/originals/ae/ac/b9/aeacb924abc3e17e184d6d5d7f82dda0.png",
	},
})

const User = mongoose.model("user",UserSchema)

export default User