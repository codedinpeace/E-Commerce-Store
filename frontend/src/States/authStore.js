    import { create } from "zustand";
    import axiosInstance from '../Utils/AxiosInstance'
    import {toast} from 'react-hot-toast'

    export const useAuthStore = create((set)=>({
        isLoggedIn:false,
        authUser:null,
        isLoggingIn:false,
        isSigningUp: false,
        isCheckingAuth:false,
        isLogginOut:false,

            signUpUser: async (data) => {
                set({isSigningUp:true})
                try {
                    const response = await axiosInstance.post("/auth/signup", data)
                    const {name,email,password, token} = response.data
                    set({authUser:{name,email,password}})
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
                        set({isLoggingIn : true})
                        try {
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
                    Check: async () => {
                        set({ isLoggingIn: true, isCheckingAuth: true })
                        try {
                          const response = await axiosInstance.get("/auth/check")
                      
                          set({
                            authUser: response.data,
                            isLoggedIn: true
                          })
                        } catch (error) {
                          toast.error("Something went wrong while checking authentication")
                          console.log(error)
                        } finally {
                          set({ isLoggingIn: false, isCheckingAuth: false })
                        }
                      },

                      LogOut: async ()=>{
                        set({isLogginOut:true})
                        try {
                            const response = await axiosInstance.post("/auth/logout")
                            set({authUser:response.data, isLoggedIn:false})
                            toast.success("Successfully Logged Out")
                        } catch (error) {
                            console.log(error)
                            toast.error("Something went wrong")
                        } finally{
                            set({isLogginOut:false})
                        }
                      }
            }))