import express from "express"
import {
	createPost,
	getPosts,
	deletePost,
	likePost,
	comment,
	deleteComment
} from "../controllers/post.controller.js"
const router = express.Router()

router.post("/createPost",createPost)
router.delete("/deletePost/:postId",deletePost)
router.put("/likePost/:userId/:postId",likePost)
router.get("/getPosts",getPosts)
router.post("/comment",comment)
router.delete("/deleteComment/:postId/:commentId",deleteComment)

export default router;