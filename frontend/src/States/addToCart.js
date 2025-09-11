import { create } from "zustand";  
import axiosInstance from "../Utils/AxiosInstance";
import toast from "react-hot-toast";

export const useCartStore = create((set)=>({
    cartItems:[],

    addToCart: async (data)=>{
        try {
            const response = await axiosInstance.post("/cart", data)
            set({cartItems:response.data.items})
            console.log(cartItems)
        } catch (error) {
            toast.error("something went wrong")
            console.log(error)
        }
    }
}))