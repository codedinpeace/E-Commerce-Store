import {create } from 'zustand'
import axiosInstance from '../Utils/AxiosInstance'
import toast from 'react-hot-toast'

export const useReviewStore = create((set)=>({
    Review: JSON.parse(localStorage.getItem("review")) || null, 
    isSubmittingReview:false,

    SubmitReview : async (data) => {
        set({isSubmittingReview: true})
        try {
            const response = await axiosInstance.post("/add-review", data)
            localStorage.setItem("review", JSON.stringify(response.data.review))
            set({Review:response.data.review})
            console.log(response.data)
            toast.success("Review Submitted Successfully")            
        } catch (error) {
            toast.error("Something went wrong while submitting the error")
        } finally{  
            set({isSubmittingReview:false})
        }
    }
})) 