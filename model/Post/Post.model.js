const mongoose = require("mongoose");

//create schema
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Post Title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Post description is required"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Post category is required"],
    },
    numViews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    disLikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please Author is required"],
    },
    photo: {
      type: String,
      // required: [true, "Post Image is required"],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

//Post Model Hooks
postSchema.pre("findOne", async function (next) {
  postSchema.virtual("viewsCount").get(function () {
    const post = this;
    return post.numViews.length;
  });

  postSchema.virtual("likesCount").get(function () {
    const post = this;
    return post.likes.length;
  });

  postSchema.virtual("disLikesCount").get(function () {
    const post = this;
    return post.disLikes.length;
  });

  postSchema.virtual("likesPercentage").get(function () {
    const post = this;
    const total = Number(post.likes.length) + Number(post.disLikes.length);
    const percentage = (post.likes.length / total) * 100;
    if (total === 0) return "0%";
    return `${percentage}%`;
  });

  postSchema.virtual("dilikesPercentage").get(function () {
    const post = this;
    const total = Number(post.likes.length) + Number(post.disLikes.length);
    console.log(total);
    const percentage = (post.disLikes.length / total) * 100;
    if (total === 0) return "0%";
    return `${percentage}%`;
  });

  postSchema.virtual("daysAgo").get(function () {
    const post = this;
    const createdAtDate = new Date(post.createdAt);
    const daysInSeconds = 8460000;
    const dayAgo = Math.floor((Date.now() - createdAtDate) / daysInSeconds);
    if (dayAgo === 0) {
      return "Today";
    } else if (dayAgo === 1) {
      return "Yesterday";
    } else {
      return `${dayAgo} days ago`;
    }
  });
  next();
});

//Compile the post model
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
