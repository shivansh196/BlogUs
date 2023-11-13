import express from 'express';
const router = express.Router();
import { body, validationResult } from 'express-validator';
import Blogs from '../models/Blogs.js';
import fetchuser from '../middleware/fetchuser.js';

//Route 1: Get All the Blogs using GET "/api/v1/blogs/fetchallblogs" Login required 
router.get('/fetchallblogs', fetchuser, async (req,res)=>{
    try {
        const blogs = await Blogs.find({user: req.user.id});
        res.json(blogs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Error occured");
    }
})


//Route 2: Add new Blog using POST "/api/v1/blogs/addblog" Login required 
router.post('/addblog', fetchuser, [
    body('title','Enter a valid Title').isLength({min: 3}),
    body('description','Description must be atleast 5 Characters').isLength({min: 5})
], async (req,res)=>{
    //try-catch use to protact database from malfunctioning
    try {
        const {title,description,picture,video,categories,user} = req.body;
        //If there are errors, return Bed Reqiust and the errors
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        const blogs = new Blogs({
            title, description, picture, video, 
            categories, user
        })
        const savedBlog = await blogs.save();
        res.json(savedBlog);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Error occured");
    }
})


//Route 3: Updating an exiting Blog using PUT "/api/v1/blogs/updateblog" Login required 
router.put('/updateblog/:id', fetchuser, async (req,res)=>{
    const {title,description,picture,video,categories,user} = req.body;
    //create a newBlog object
    const newBlog = {};
    if(title){{newBlog.title = title}}
    if(description){{newBlog.description = description}}
    if(picture){{newBlog.picture = picture}}
    if(video){{newBlog.video = video}}
    if(categories){{newBlog.categories = categories}}
    if(user){{newBlog.user = user}}

    //check for correct uses with it's own blogs only
    let blog = await Blogs.findById(req.params.id);
    if(!blog){ return res.status(404).send("Not Found")}

    if(blog.user.toString() !== req.user.id){
        return res.status(401).send("Not Allowed");
    }

    //find the blog to be updated and update it
    blog = await Blogs.findByIdAndUpdate(req.params.id, {$set: newBlog},{new: true});
    res.json({blog});
})


//Route 4: Deleting an exiting blog using DELETE "/api/blogs/deleteblog" Login required 
router.delete('/deleteblog/:id', fetchuser, async (req,res)=>{
    
    //find the blog to be delete and delete it
    //check for correct uses with it's own blogs only
    let blog = await Blogs.findById(req.params.id);
    if(!blog){ return res.status(404).send("Not Found")}
    
    //Allowed deletion only if user own this blog
    if(blog.user.toString() !== req.user.id){
        return res.status(401).send("Not Allowed");
    }

    blog = await Blogs.findByIdAndDelete(req.params.id);
    res.json({"Success" : "blog as been deleted"});
    // res.json({blog})
})


export default router;