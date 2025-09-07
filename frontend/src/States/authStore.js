import { create } from "zustand";
import axiosInstance from '../Utils/AxiosInstance'
import {toast} from 'react-hot-toast'

export const useAuthStore = create((set)=>({
    isLoggedIn:false,
    authUser:null,
    isLoggingIn:false,
    isSigningUp: false,

        signUpUser: async (data) => {
            try {
                set({isSigningUp:true})
                const response = await axiosInstance.post("/auth/signup", data)
                set({authUser:response.data})
                toast.success("Successfully signed up")
                console.log("response: ", response.data)
            } catch (error) {
                toast.error("Something went wrong")
                console.log(error)
            } finally {
                set({isSigningUp:false})
            }
            }
    }))