const createPost = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "post created",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const getPosts = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "all posts",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const getPost = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "one post",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const updatePost = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user update post",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const deletePost = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user delete post",
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = { createPost, getPosts, getPost, updatePost, deletePost };
