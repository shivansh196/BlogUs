const express = require('express');
const router = express.Router();
const User = require('../models/User')

//ROUTE 1::Create a User using: POST "/api/auth/signup"  -- no login required 
router.post('/signup' , async (req,res)=>{
    //try-catch if server not work
    try {
        //check weather the user with this email exit
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({error: "Email already exit!"})
        }
        //create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occured");
    }
})
//ROUTE 2:: Authenticate a User using: POST "/api/auth/login"  -- no login required 
router.post('/login' , async (req,res)=>{
    //try-catch to check weather entered user information are correct such as email and password
    const {email,password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error: "Please try to login with correct credentials"});
        }

        if(user.password!=password){
            return res.status(400).json({error: "Please try to login with correct credentials"});
        }
        //payload -- user information from database
        const data = {
            user: {
                id: user.id
            }
        }
        res.json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Error occured");
    }
})

module.exports = router