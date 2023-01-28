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
        "Platinum",
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

//User Model Hooks

userSchema.pre("findOne", async function (next) {
  // populate all the posts
  this.populate("posts");
  // the user id
  const userId = this._conditions._id;
  // Posts created by the users
  const postFound = await Post.find({ user: userId });
  // the last post by the user
  const lastPost = postFound[postFound.length - 1];
  // the last post date
  const lastPostDate = new Date(lastPost && lastPost.createdAt);
  const lastPostDateString = lastPostDate.toDateString();
  userSchema.virtual("lastPostDate").get(function () {
    return lastPostDateString;
  });
  next();

  // check is user is inactive or not for 7days

  // getCurrentDate
  const diff = new Date() - lastPostDate;
  const diffOfDays = diff / (1000 * 3600 * 24);

  // last active date of the user based on the posts
  // conver days to int
  const daysAgo = Math.floor(diffOfDays);
  userSchema.virtual("lastActive").get(function () {
    if (daysAgo === 0) return "Today";
    if (daysAgo === 1) return "Yesterday";
    return `${daysAgo} days ago`;
  });

  // get the numbers of posts
  const numbersOfPosts = postFound.length;
  if (numbersOfPosts < 1) {
    await User.findByIdAndUpdate(userId, { userAward: "Iron" }, { new: true });
  }
  if (numbersOfPosts >= 1 && numbersOfPosts < 2) {
    await User.findByIdAndUpdate(
      userId,
      { userAward: "Bronze" },
      { new: true }
    );
  }
  if (numbersOfPosts >= 2 && numbersOfPosts < 5) {
    await User.findByIdAndUpdate(
      userId,
      { userAward: "Silver" },
      { new: true }
    );
  }
  if (numbersOfPosts >= 5 && numbersOfPosts < 10) {
    await User.findByIdAndUpdate(userId, { userAward: "Gold" }, { new: true });
  }
  if (numbersOfPosts >= 10 && numbersOfPosts < 15) {
    await User.findByIdAndUpdate(
      userId,
      { userAward: "Platinum" },
      { new: true }
    );
  }
  if (numbersOfPosts >= 15 && numbersOfPosts < 20) {
    await User.findByIdAndUpdate(
      userId,
      { userAward: "Diamond" },
      { new: true }
    );
  }
  if (numbersOfPosts >= 20) {
    await User.findByIdAndUpdate(
      userId,
      { userAward: "Diamond" },
      { new: true }
    );
  }

  if (diffOfDays > 7) {
    userSchema.virtual("isInactive").get(function () {
      return true;
    });
    const user = await User.findById(userId);
    if (user && !user.isBlocked) user.isBlocked = true;
    await user.save();
    // await User.findByIdAndUpdate(
    //   userId,
    //   {
    //     isBlocked: true,
    //   },
    //   { new: true }
    // );
  } else {
    userSchema.virtual("isInactive").get(function () {
      return false;
    });
    const user = await User.findById(userId);
    if (user && user.isBlocked) user.isBlocked = false;
    await user.save();
    // await User.findByIdAndUpdate(
    //   userId,
    //   {
    //     isBlocked: false,
    //   },
    //   { new: true }
    // );
  }
});

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
