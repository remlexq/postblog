const Post = require("../models/postModel");


const handleError = (res, error) => {
    res.status(500).json({error});
}


const getMain = (req, res) => {
    res.render("index", {title: 'Головна Сторінка'});
};


const getAbout = (req, res) => {
    res.render("about", {title: 'Про сайт'})
};


const getAddPost = (req, res) => {
    res.render("add-post", {title: 'Додати новий пост'});
};


const getPosts = (req, res) => {
    Post.find()
    .sort({updatedAt: -1})
    .then((posts) => res.render("posts", {title: "Пости", posts}))
    .catch((error) => {
        console.log(error);
        res.render("error");
    });
};


const addPost = (req, res) => {
    const post = new Post(req.body);
    post
       .save()
       .then(() => res.redirect("/posts"))
       .catch((err) => handleError(res, err));
};

const getEditPost = (req, res) => {
    let id = req.params.id;
    Post.findById(id)
    .then((post) =>
    res.render("edit-post", { title: post.title, author: post.author, description: post.description, id:
    post._id, post })
    )
    .catch((error) => {
        console.log(error);
        res.render("error");
    });
};

const putEditPost =(req, res) => {
    let id = req.params.id;
    const { title, author, description } = req.body;
    Post.findByIdAndUpdate(id, { title, author, description })
    .then(() => res.redirect(`/posts`))
    .catch((error) => {
        console.log(error);
        res.render("error");
    });
};

const deletePost = (req, res) => {
    let id = req.params.id;
    Post
    .findByIdAndDelete(id)
    .catch((err) => handleError(res, err));
};


module.exports = {
    getPosts,
    getMain,
    getAddPost,
    getEditPost,
    putEditPost,
    getAbout,
    deletePost,
    addPost,
};