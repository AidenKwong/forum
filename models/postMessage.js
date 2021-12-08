import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  name: String,
  creator: String,
  likes: {
    type: [String],
    default: [],
  },
  disLikeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
