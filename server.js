const express = require("express");
const connectDB = require("./config/db");
const categoryRouter = require("./routes/categories/categoryRoutes");
const commentRouter = require("./routes/comments/commentRoutes");
const postRouter = require("./routes/posts/postRoutes");
const userRouter = require("./routes/users/userRoutes");
const { Endpoints } = require("./utils/endpoints");
const GlobalError = require("./middlewares/GlobalError");

require("dotenv").config();
// connect to database
connectDB();
const app = express();

//middlewares
app.use(express.json());
// routes
app.use(Endpoints.usersEndpoint, userRouter);
app.use(Endpoints.postsEndpoint, postRouter);
app.use(Endpoints.commentsEndpoint, commentRouter);
app.use(Endpoints.categoriesEndpoint, categoryRouter);

// error handlers middleware
app.use(GlobalError);

// error url / route not found
app.use("*", (req, res) => {
  console.log(req.originalUrl);
  res.status(404).json({
    message: `${req.originalUrl} - Route Not Found`,
  });
});
//listen to server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server is running on port : " + PORT));
