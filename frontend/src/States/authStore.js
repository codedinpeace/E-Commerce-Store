    import { create } from "zustand";
    import axiosInstance from '../Utils/AxiosInstance'
    import {toast} from 'react-hot-toast'

    export const useAuthStore = create((set)=>({
        isLoggedIn:false,
        authUser:null,
        isLoggingIn:false,
        isSigningUp: false,
        isLoggingIn: false,
        isCheckingAuth:false,

            signUpUser: async (data) => {
                try {
                    set({isSigningUp:true})
                    const response = await axiosInstance.post("/auth/signup", data)
                    const {name,email,password, token} = response.data
                    set({authUser:{name,email,password}})
                    localStorage.setItem({"token":token})
                    toast.success("Successfully signed up")
                    console.log("response: ", response.data)
                    set({isLoggedIn:true})
                } catch (error) {
                    toast.error("Something went wrong")
                    console.log(error)
                } finally {
                    set({isSigningUp:false})
                }
                },
                    Loginuser: async(data)=>{
                        try {
                            set({isLoggingIn : true})
                            const response = await axiosInstance.post("/auth/login", data)
                        set({authUser:response.data})
                            set({isLoggedIn : true})
                            toast.success("User logged in successfully")
                        } catch (error) {
                            toast.error("Something went wrong")
                            console.log(error)
                        } finally{
                            set({isLoggingIn : false})
                        }
                    },
                        Check : async() =>{ 
                            try {
                                set({isLoggingIn:true})
                                set({isCheckingAuth:true})
                                const response = await axiosInstance.post("/auth/check")
                                set({
                                    authUser:response.data,
                                    isLoggedIn:true,
                                    isLoggingIn:false
                                })
                                toast.success("Authentication check successfull")
                            } catch (error) {
                                toast.error("Something went wrong while checking authentication")
                                console.log(error)                          
                            } finally{
                                set({isLoggingIn:false})
                                set({isCheckingAuth:false})
                            }
                        }
            }))