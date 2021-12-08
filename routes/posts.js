import express from "express";

import { getPosts, createPost, likePost } from "../controllers/posts.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", auth, createPost);
// router.patch("/:id", updatePost);
router.patch("/:id/likePost", auth, likePost);

export default router;
