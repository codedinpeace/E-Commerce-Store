import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

export const usePictureStore = create((set)=>({
    picture: localStorage.getItem("picture") || null, 
    isPictureLoading:false,

     handlePictureSubmit: async (e)=>{
        set({isPictureLoading: true})
        try {
            const data = e.target.files[0]
            if(!data) return 
      
            const file = new FormData()
            file.append("file", data)
            file.append("upload_preset", "First_Time")
            file.append("cloud_name", "dpz4owext")
            const response = await axios.post(" https://api.cloudinary.com/v1_1/dpz4owext/image/upload", file)
            set({picture:response.data.secure_url})
            localStorage.setItem("picture", response.data.secure_url)
            toast.success("Picture uploaded Successfully")
        } catch (error) {
            toast.error("Something went wrong")
        } finally{
            set({isPictureLoading: false})
        }
     }
}))