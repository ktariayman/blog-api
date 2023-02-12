const createPost = require("../../services/posts/createPostService");
const getPosts = require("../../services/posts/getPostsServices");
const getPost = require("../../services/posts/getPostService");
const updatePost = require("../../services/posts/updatePostService");
const deletePost = require("../../services/posts/deletePostService");
const likePost = require("../../services/posts/likePostsService");
const dislikePost = require("../../services/posts/dislikePostService");

exports.controllers = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  likePost,
  dislikePost,
};
