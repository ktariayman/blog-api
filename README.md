# **blog-api**

## Tech Stack

**Server:** Node, Express, MongoDB, Mongoose, JWT,Cloudinary

# API FEATURES

- Authentication & Authorization
- Post CRUD operations
- Comment functionality
- Categories CRUD operations
- Admin can block a user
- A user can block different users
- A user who block another user cannot see his/her posts
- Last date a post was created
- Check if a user is active or not
- Check last date a user was active
- Changing user award base on number of posts created by the user
- A user can follow and unfollow another user
- A user can block and unblock another user
- Get following and followers count
- Get total profile viewers count
- Get posts created count
- Get blocked counts
- Get all users who views someone's profile
- Admin can unblock a blocked user
- Admin can change the role of the user to an admin
- Update password
- Profile photo uploaded
- A user can close his/her account

# ENDPOINTS

- [API AUTHENTIFICATION](https://www.github.com/ktariayman)

  - - [Register](https://www.github.com/ktariayman)
  - - [login](https://www.github.com/ktariayman)

- [Users](#api)

  - [Get my profile](#get-my-profile)
  - [Get all users](#Get-all-users)
  - [View a user profile Count](#view-a-user-profile)
  - [Following a user](#Following-a-user)
  - [#UnFollowing-a-user](#UnFollowing-a-user)
  - [Update user password](#Update-user-password)
  - [Update your profile](#Update-your-profile)
  - [Block another user](#Block-user)
  - [Unblock another user](#Unblock-user)
  - [Admin blocking a user](#Admin-blocking-a-user)
  - [Admin Unblocking a user](#Admin-unblocking-a-user)
  - [Delete your account](#Delete-your-account)
  - [Upload Profile Photo](#Upload-Profile-Photo)

- [Posts](#Posts-API-Refeference)

  - [Create Post](#Create-Post)
  - [Get All Posts](#Get-All-Posts)
  - [Get Single Post](#Get-Single-Post)
  - [Toggle Post like](#Toggle-Post-like)
  - [Toggle Post dislike](#Toggle-Post-dislike)
  - [Update Post](#Update-Post)
  - [Delete Post](#Delete-Post)

- [Comments](#Comment-API-Reference)
  - [Create comment](#Create-Comment)
  - [Update post](#Update-Comment)
  - [Delete post](#Delete-Comment)
  
- [Categories](#Categories-API-Reference)
  - [Get All Categories](#Get-Categories)
  - [Get Single Category](#Get-Category)
  - [Create Category](#Create-Category)
  - [Update Category](#Update-Category)
  - [Delete Category](#Delete-Category)
## Run Locally

Clone the project

```bash
  git clone
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

all envFile that I Used :
`MONGODB_PASSWORD`
`MONGODB_URL`
`PORT`
`JWT_SECRET`
`MONGODB_PASSWORD`
`USER_ENDPOINT`
`POSTS_ENDPOINT`
`COMMENT_ENDPOINT`
`CATEGORRIES_ENDPOINT`
`CLOUDINARY_CLOUD_NAME`
`CLOUDINARY_API_KEY`
`CLOUDINARY_API_SECRET_KEY`

## Register a new API client

```http
POST /api/v1/users/register
```

The request body needs to be in JSON format.

# **API Reference**

## **User Login**

```http
POST /api/v1/users/login
```

| Parameter        | Type     | Description   | Required |
| :--------------- | :------- | :------------ | :------- |
| `authentication` | `string` | Your token    | no       |
| `email`          | `string` | Your email    | yes      |
| `password`       | `string` | Your password | yes      |

Example request body:

```javascript
{
  "email":"your email"
  "password":"your password"
}
```

## **get my profile**

```http
GET /api/v1/users/profile
```

| Parameter        | Type     | Description | Required |
| :--------------- | :------- | :---------- | :------- |
| `authentication` | `string` | Your token  | yes      |

## **Get all users**

```http
GET /api/v1/users/users
```

| Parameter        | Type     | Description | Required |
| :--------------- | :------- | :---------- | :------- |
| `authentication` | `string` | Your token  | no       |

## **view a user profile**

```http
GET /api/v1/users/profile-viewers/:id
```

| Parameter        | Type     | Description                                 | Required |
| :--------------- | :------- | :------------------------------------------ | :------- |
| `authentication` | `string` | Your token                                  | yes      |
| `id`             | `string` | ID of the user you want to view his profile | yes      |

#### **Following a user**

```http
GET /api/v1/users/following/:id
```

| Parameter        | Type     | Description                       | Required |
| :--------------- | :------- | :-------------------------------- | :------- |
| `authentication` | `string` | Your token                        | yes      |
| `id`             | `string` | ID of the user you want to follow | yes      |

## **UnFollowing a user**

```http
GET /api/v1/users/unfollowing/:id
```

| Parameter        | Type     | Description                       | Required |
| :--------------- | :------- | :-------------------------------- | :------- |
| `authentication` | `string` | Your token                        | yes      |
| `id`             | `string` | ID of the user you want to follow | yes      |

## **Update user password**

```http
PUT /api/v1/users/update-password
```

| Parameter        | Type     | Description         | Required |
| :--------------- | :------- | :------------------ | :------- |
| `authentication` | `string` | Your token          | yes      |
| `password`       | `string` | Enter your password | yes      |

Example request body:

```javascript
{
  "password":"value"
}
```

## **Update your profile**

```http
PUT /api/v1/users
```

| Parameter        | Type     | Description          | Required |
| :--------------- | :------- | :------------------- | :------- |
| `authentication` | `string` | Your token           | yes      |
| `email`          | `string` | Enter your email     | no       |
| `firstname`      | `string` | Enter your firstname | no       |
| `lastname`       | `string` | Enter your lastname  | no       |

Example request body:

```javascript
{
  "email":"value",
  "firstname":"value",
  "lastname":"value",
}
```

## **Block another user**

```http
PUT /api/v1/users/blocking/:id
```

| Parameter        | Type     | Description                      | Required |
| :--------------- | :------- | :------------------------------- | :------- |
| `authentication` | `string` | Your token                       | yes      |
| `id`             | `string` | Id of the user you want to block | yes      |

## **Unblock user**

```http
PUT /api/v1/users/unblocking/:id
```

| Parameter        | Type     | Description                        | Required |
| :--------------- | :------- | :--------------------------------- | :------- |
| `authentication` | `string` | Your token                         | yes      |
| `id`             | `string` | Id of the user you want to unblock | yes      |

## **Admin blocking a user**

```http
PUT /api/v1/users/admin-block/:id
```

| Parameter        | Type     | Description                      | Required |
| :--------------- | :------- | :------------------------------- | :------- |
| `authentication` | `string` | Your token                       | yes      |
| `id`             | `string` | Id of the user you want to block | yes      |

## **Admin unblocking a user**

```http
PUT /api/v1/users/admin-unblock/:id
```

| Parameter        | Type     | Description                        | Required |
| :--------------- | :------- | :--------------------------------- | :------- |
| `authentication` | `string` | Your token                         | yes      |
| `id`             | `string` | Id of the user you want to unblock | yes      |

## **Delete your account**

```http
  DELETE /api/v1/users/delete-account
```

| Parameter        | Type     | Description | Required |
| :--------------- | :------- | :---------- | :------- |
| `authentication` | `string` | Your token  | yes      |

## **Upload Profile Photo**

```http
  DELETE /api/v1/users/profile-photo-upload
```

| Parameter        | Type     | Description     | Required |
| :--------------- | :------- | :-------------- | :------- |
| `authentication` | `string` | Your token      | yes      |
| `profilePhoto`   | `string` | Image to upload | yes      |

# **Posts API Refeference**

## **Create Post**

```http
  POST /api/v1/posts
```

| Parameter        | Type     | Description        | Required |
| :--------------- | :------- | :----------------- | :------- |
| `authentication` | `string` | Your token         | yes      |
| `title`          | `string` | Post title         | yes      |
| `description`    | `string` | Post description   | yes      |
| `category`       | `string` | ID of the category | yes      |
| `photo`          | `string` | Image of the post  | yes      |

Example request body:

```javascript
{
  "title":"value",
  "description":"value",
  "category":"value",
  "photo":"photo",
}
```

## **Get All Posts**

```http
  GET /api/v1/posts
```

| Parameter        | Type     | Description | Required |
| :--------------- | :------- | :---------- | :------- |
| `authentication` | `string` | Your token  | no       |

## **Get Single Post**

```http
  GET /api/v1/posts/:id
```

| Parameter        | Type     | Description    | Required |
| :--------------- | :------- | :------------- | :------- |
| `authentication` | `string` | Your token     | yes      |
| `id`             | `string` | ID of the post | yes      |

## **Toggle Post like**

```http
  GET /api/v1/posts/likes/:id
```

| Parameter        | Type     | Description    | Required |
| :--------------- | :------- | :------------- | :------- |
| `authentication` | `string` | Your token     | yes      |
| `id`             | `string` | ID of the post | yes      |

## **Toggle Post dislike**

```http
  GET /api/v1/posts/dislikes/:id
```

| Parameter        | Type     | Description    | Required |
| :--------------- | :------- | :------------- | :------- |
| `authentication` | `string` | Your token     | yes      |
| `id`             | `string` | ID of the post | yes      |

## **Update Post**

```http
  PUT /api/v1/posts/:id
```

| Parameter        | Type     | Description             | Required |
| :--------------- | :------- | :---------------------- | :------- |
| `authentication` | `string` | Your token              | yes      |
| `id`             | `string` | ID of the post          | yes      |
| `title`          | `string` | title of the post       | yes      |
| `description`    | `string` | description of the post | yes      |
| `category`       | `string` | category of the post    | yes      |
| `photo`          | `string` | photo of the post       | yes      |

Example request body:

```javascript
{
  "title":"value",
  "description":"value",
  "category":"value",
  "photo":"photo",
}
```

## **Delete Post**

```http
  DELETE /api/v1/posts/:id
```

| Parameter        | Type     | Description    | Required |
| :--------------- | :------- | :------------- | :------- |
| `authentication` | `string` | Your token     | yes      |
| `id`             | `string` | ID of the post | yes      |

# **Comment API Reference**

## **Get Comment**

```http
  GET /api/v1/comments/:id
```

| Parameter        | Type     | Description    | Required |
| :--------------- | :------- | :------------- | :------- |
| `authentication` | `string` | Your token     | yes      |
| `id`             | `string` | ID of the post | yes      |

## **Create Comment**

```http
  POST /api/v1/comments/:id
```

| Parameter        | Type     | Description    | Required |
| :--------------- | :------- | :------------- | :------- |
| `authentication` | `string` | Your token     | yes      |
| `id`             | `string` | ID of the post | yes      |

## **Delete Comment**

```http
  DELETE /api/v1/comments/:id
```

| Parameter        | Type     | Description       | Required |
| :--------------- | :------- | :---------------- | :------- |
| `authentication` | `string` | Your token        | yes      |
| `id`             | `string` | ID of the comment | yes      |

## **Update Comment**

```http
  PUT /api/v1/comments/:id
```

| Parameter        | Type     | Description    | Required |
| :--------------- | :------- | :------------- | :------- |
| `authentication` | `string` | Your token     | yes      |
| `id`             | `string` | ID of the post | yes      |

# **Categories API Reference**

## **Get Categories**

```http
  GET /api/v1/categories
```

| Parameter        | Type     | Description | Required |
| :--------------- | :------- | :---------- | :------- |
| `authentication` | `string` | Your token  | yes      |

## **Get Category**

```http
  GET /api/v1/categories/:id
```

| Parameter        | Type     | Description        | Required |
| :--------------- | :------- | :----------------- | :------- |
| `authentication` | `string` | Your token         | yes      |
| `id`             | `string` | ID of the category | yes      |

## **Create category**

```http
  POST /api/v1/categories/:id
```

| Parameter        | Type     | Description           | Required |
| :--------------- | :------- | :-------------------- | :------- |
| `authentication` | `string` | Your token            | yes      |
| `title`          | `string` | TITLE of the category | yes      |

## **Delete category**

```http
  DELETE /api/v1/categories/:id
```

| Parameter        | Type     | Description           | Required |
| :--------------- | :------- | :-------------------- | :------- |
| `authentication` | `string` | Your token            | yes      |
| `id`             | `string` | TITLE of the category | yes      |

## **Update category**

```http
  PUT /api/v1/categories/:id
```

| Parameter        | Type     | Description           | Required |
| :--------------- | :------- | :-------------------- | :------- |
| `authentication` | `string` | Your token            | yes      |
| `id`             | `string` | ID of the category    | yes      |
| `title`          | `string` | TITLE of the category | yes      |
