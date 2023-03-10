import Post from "../models/post.model.js"

export const getPosts = async (req,res) => {
	try {
		const posts = await Post.find()
			.populate({path:"author", select:["username","pfp"]})
			.populate({path:"likes"})

		return res.status(200).json(posts)

	}catch(err) {
		return res.status(404).json("posts not found")
	}
}

export const createPost = async (req,res) => {
	try{
		const createdPost = await Post.create(req.body)
		const populatedPost = await Post.findById(createdPost._id).populate({path:"author", select:["username","pfp"]})
		return res.status(200).json(populatedPost)
	}catch(err) {
		return res.status(401).json("couldnt create post")
	}
}

export const deletePost = async (req,res) => {
	const { postId } = req.params 

	try{
		const deletedPost = await Post.findByIdAndDelete(postId)

		return res.status(200).json(deletedPost)

	}catch(err){
		return res.status(404).json("could not delete post")
	}
}

export const likePost = async (req,res) => {
	const { userId,postId } = req.params
	const post = await Post.findById(postId)

	if(post.likes.includes(userId)) {
		await post.updateOne({ $pull : { likes: userId } })
		const dislikedPost = await Post.findById(postId)
		res.json(dislikedPost)
	}else {
		await post.updateOne({ $push: {likes:userId} })
		const likedPost = await Post.findById(postId)
		return res.json(likedPost)
	}
	
}

export const comment = async (req,res) => {
	const post = await Post.findById(req.body.postId)
	await post.comments.push(req.body)

	await post.save()

	res.status(200).json(post.comments[post.comments.length - 1]._id)
}

export const deleteComment = async (req,res) => {
	const post = await Post.findById(req.params.postId)
	await post.updateOne({$pull: {comments: { _id: req.params.commentId } }})
	res.json("OK")
}