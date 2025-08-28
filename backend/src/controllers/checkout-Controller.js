        const express = require('express')
        const CheckOut = require('../models/checkOut.js')

        const checkOut = async (req,res)=>{
            const userId = req.user._id
            const {address, PhoneNumber,PinCode, City, State } = req.body
            try {
                let checkOutInfo = await CheckOut.findOne({userId})
                if(checkOutInfo){
                    checkOutInfo.address = address;
                    checkOutInfo.PhoneNumber = PhoneNumber;
                    checkOutInfo.PinCode = PinCode;
                    checkOutInfo.City = City;
                    checkOutInfo.State = State;
                    await checkOutInfo.save();
                }else{ 
                    checkOutInfo = await CheckOut.create({
                        userId,address,PhoneNumber,PinCode,City,State
                })
                }

            res.status(200).json({checkOutInfo})
            } catch (error) {
                res.status(500).json({message:"Something went wrong"})
            }
        }

        module.exports = checkOut