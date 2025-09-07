const express = require('express')
const User = require('../models/userModel.js')
const bcrypt = require('bcrypt')
const generateToken = require('../lib/generate-token.js')

const signup = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }
  
      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });
  
      // generateToken may throw error
      try {
        generateToken(newUser._id, res);
      } catch (tokenError) {
        console.log(tokenError)
        return res.status(500).json({ message: "Token generation failed" });
      }
  
      return res.status(201).json({
        _id: newUser._id,   
        name: newUser.name,
        email: newUser.email,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  };
  
    const login = async (req,res)=>{
        try{
            const { email, password} = req.body
            const user = await User.findOne({email})
            if(!user) return res.status(400).json({message:"Invalid Credentials"}) 
            const comparedPassword = await bcrypt.compare(password, user.password)
            if(!comparedPassword) return res.status(200).json({message:"Invalid credentials"})
                generateToken(user._id, res)
            res.status(200).json({
                _id:user._id,
                name:user.name,
                email:user.email,
            })
        }
        catch(error){
            res.status(500).json({message:"Something went wrong while loggin in the user"})
        }
    }

const logout = (req,res)=>{
    try {
        res.cookie("token", "")
        res.status(200).json({message:"Logged out successfully"})
    } catch (error) {
        res.status(500).json({message:"Something went wrong while logging out"})
    }

  }
  const check = (req,res)=>{
    try{
      if(!req.user) return res.json({message:"User is not authenticated"})
        res.json(req.user)  
    }
    catch(error){
      res.json({message:"Error occured"})
    }
  }

module.exports = {signup, login, logout, check}