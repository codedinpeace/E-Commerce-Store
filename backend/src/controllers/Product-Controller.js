const express = require('express')
const Product = require('../models/products.js')


const add = async (req,res) =>{
    console.log(req.user)
    const {productName, productDescription} = req.body
    try {
        const user = req.user
        if(user.isAdmin === false) return res.status(400).json({message:"You are not an admin"})
            const product = await Product.create({
                productName,
                productDescription,
        })
        res.status(200).json({message:"Product created Successfully", product})
    } catch (error) {
        res.status(500).json({message:"Something went wrong while adding a product"})
    }
}   

const remove = async (req,res)=>{
    try {
        const {id} = req.params
        const deletedProduct = await Product.findOneAndDelete({_id:id})
        res.status(200).json(deletedProduct)
    } catch (error) {
        res.status(500).json({message:"Something went wrong while deleting the product"})
    }
}

const edit = async (req,res)=>{
    try {
        const {productName, productDescription} = req.body
        const {id} = req.params;
        const updatedProduct = await Product.findOneAndUpdate({_id:id}, {productName, productDescription}, {new:true})
        res.status(200).json({updatedProduct})
    } catch (error) {
        res.status(500).json({message:"Something went wrong while updating the product"})
    }
}

const getProducts = async (req, res) => {
    try {
        const { categories, search, minPrice, maxPrice } = req.query;
        const query = {};

        // Category filter
        if (categories) {
            const categoryArray = categories.split(','); // e.g. "men,kids" -> ["men", "kids"]
            query.category = { $in: categoryArray };
        }

        // Search by name
        if (search) {
            query.productName = { $regex: search, $options: 'i' };
        }

        // Price filter
        if (minPrice) query.price = { $gte: Number(minPrice) };
        if (maxPrice) query.price = { ...query.price, $lte: Number(maxPrice) };

        const products = await Product.find(query);
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong while fetching products" });
    }
};

module.exports = { add, remove, edit, getProducts };