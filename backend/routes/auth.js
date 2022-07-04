const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'hisur$bhi$side7';

// ROUTE:1  create a user using POST "/api/auth/createuser". No login required
//creating validation
router.post('/createuser',[
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
], async (req,res)=>{
  let success = false;

    //if there are errors, return Bad request and the errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }

    //chech whether the user with this email exists already.
    try {
    let user = await User.findOne({email: req.body.email});
    if(user){
      return res.status(400).json({success, error: "sorry a user with this email already exists"})
    }

    //creating salt
    //creating it await(waits until await function returns a value, then moves to next line) as it returns promise
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt)

    //create a new user
     user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      
      //data for jwt
      const data = {
        user: {
          id: user.id
        }
      }

      //sending data and adding jwt secret
      const authtoken = jwt.sign(data, JWT_SECRET);
        
      //res.json(user)
      success= true;
      res.json({success, authtoken})

  } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
  } 
})

//ROUTE:2   authenticating a user using POST "/api/auth/login". No login required
//creating validation
router.post('/login',[ 
  body('email', 'enter a valid email').isEmail(),
  body('password', 'password cannot be blank').exists(),
  
], async (req,res)=>{
  let success = false;

  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // taking vaild email password from body
    const {email, password} = req.body;
    try {
      let user = await User.findOne({email});
      if(!user){
        return res.status(400).json({error: "Please try to login with correct credentials"})
      }

      const passwordCompare =  await bcrypt.compare(password, user.password);
      if(!passwordCompare){
        success = false;
        return res.status(400).json({success, error: "Please try to login with correct credentials"});
      }
      const data = {
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      success= true;  
      res.json({success, authtoken})
      
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
      
    }
  })

  //ROUTE:3   Getting  logged in user details using POST "/api/auth/getuser". login required
  router.post('/getuser', fetchuser, async (req,res)=>{
    
    try {
    userId = req.user.id;
    //selecting everything minus password
    const user = await User.findById(userId).select("-password")
    res.send(user);
  } catch (error) {
    console.error(error.message);
      res.status(500).send("Internal Server Error");
      
  }
})
module.exports = router
//middleware is any function that will be called whenever there is a request on login required function