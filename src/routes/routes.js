const express = require("express");
const router = express.Router();
const createUserController = require("../controllers/create-user-controller");
const createPostController = require("../controllers/create-post-controller");
const findUserController = require("../controllers/find-user-controller");
const findPostController = require("../controllers/find-post-controller");
const updateUserController = require("../controllers/update-user-controller");  
const updatePostController = require("../controllers/update-post-controller");
const deleteUserController = require("../controllers/delete-user-controller");

router.post("/user", createUserController.createUser);
router.post("/post", createPostController.createPost);
router.get("/users/:id", findUserController.findUser);
router.get("/posts/:id", findPostController.findPost);
router.patch("/user", updateUserController.updateUser);
router.patch("/post", updatePostController.updatePost);
router.delete("/user/:id", deleteUserController.deleteUser);


module.exports = router;