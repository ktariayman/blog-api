require("dotenv").config();

const Endpoints = {
  usersEndpoint: process.env.USER_ENDPOINT,
  postsEndpoint: process.env.POSTS_ENDPOINT,
  commentsEndpoint: process.env.COMMENT_ENDPOINT,
  categoriesEndpoint: process.env.CATEGORRIES_ENDPOINT,
};

module.exports = { Endpoints };
