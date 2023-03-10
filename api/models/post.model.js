import mongoose from "mongoose"

const commentSchena = new mongoose.Schema({
	body: String,
	postId: String,
	authorName: String,
	authorPfp: String,
	authorId: String,
	default:[],
}, { timestamps:true })

const PostSchema = new mongoose.Schema({
	title: String,
	pic: String,
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user"
	},
	likes: [{type: mongoose.Schema.Types.ObjectId, ref: "user", default:[]}],
	comments:[commentSchena]
	
}, { timestamps:true })

const Post = mongoose.model("post",PostSchema)

export default Post