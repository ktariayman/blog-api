const mongoose = require("mongoose");
const Post = require("../Post/Post.model.js");

//create schema
const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "First Name is required"],
    },
    lastname: {
      type: String,
      required: [true, "Last Name is required"],
    },
    profilePhoto: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },

    isBlocked: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["Admin", "Guest", "Editor"],
    },
    viewers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    blocked: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    plan: {
      type: String,
      enum: ["Free", "Premium", "Pro"],
      default: "Free",
    },

    userAward: {
      type: String,
      enum: [
        "Iron",
        "Bronze",
        "Silver",
        "Gold",
        "Platinum ",
        "Diamond",
        "Legendary",
      ],
      default: "Iron",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

// full name of the user
userSchema.virtual("fullname").get(function () {
  return `${this.firstname} ${this.lastname}`;
});

userSchema.virtual("initials").get(function () {
  return `${this.firstname.toUpperCase()[0]}${this.lastname.toUpperCase()[0]}`;
});

//get posts counts
userSchema.virtual("postsCount").get(function () {
  return this.posts.length;
});
// get followers count

userSchema.virtual("followersCount").get(function () {
  return this.followers.length;
});
// get following count

userSchema.virtual("followingCount").get(function () {
  return this.following.length;
});
// get viewers count
userSchema.virtual("viewersCount").get(function () {
  return this.viewers.length;
});

// get viewers count
userSchema.virtual("blockedCount").get(function () {
  return this.blocked.length;
});
const User = mongoose.model("User", userSchema);

module.exports = User;
