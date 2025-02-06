import mongoose from "mongoose";
import { Schema } from "mongoose";
import User from "./User.js";  // Import User model
import Post from "./Post.js";
const CommentSchema = new mongoose.Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true }
}, { timestamps: true });

const Comment = mongoose.model('Comment', CommentSchema);
export default  Comment;
