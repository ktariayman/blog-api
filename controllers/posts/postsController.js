const createPost = require("../../services/posts/createPostService");
const getPosts = require("../../services/posts/getPostsServices");
const getPost = require("../../services/posts/getPostService");
const updatePost = require("../../services/posts/updatePostService");
const deletePost = require("../../services/posts/deletePostService");

exports.controllers = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
};
