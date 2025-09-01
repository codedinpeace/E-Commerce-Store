const Review = require('../models/reviews.js')
const express = require('express')

const createReview = async (req,res)=>{
    const {rating, review} = req.body
    try {
        const createdReview = await Review.create({
            rating,
            review,
        })

        res.status(200).json(createReview)
    } catch (error) {
        res.status(400).json({message:"Something went wrong while creating review"})
    }
}

module.exports = createReview
