const express = require("express");
const router = express.Router();

const {
    getPosts,
    getMain,
    getAddPost,
    getEditPost,
    getAbout,
    deletePost,
    addPost,
    putEditPost,
} =require('../controlers/post-controler');


router.get('/posts', getPosts);
router.get('/', getMain);
router.get('/add-post', getAddPost);
router.get('/edit-post/:id', getEditPost);
router.get('/about', getAbout);
router.delete('/posts/:id', deletePost);
router.post('/add-post', addPost);
router.put("/edit-post/:id", putEditPost);

module.exports = router;
