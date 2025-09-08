    import React, {useRef, useState} from "react";
    import { useReviewStore } from "../States/ReviewStore";
    import { useParams } from "react-router-dom";

    const AddReview = () => {

        const {isSubmittingReview, SubmitReview} = useReviewStore()
        const {id} = useParams()

        const [review, setReview] = useState({
            productId:id,
            review:"",
            rating:""
        })

        
        const handleReviewValue = (e) =>{
            setReview(prev=>({
                ...prev,
                review: e.target.value
            }))
        }
        
        const handleSubmit = (e) => {
            e.preventDefault();
            SubmitReview(review)
        };
        
        const inputRef = useRef()
        
        const handleRatingValue = (e) =>{
            e.target.value
            inputRef.current.textContent = e.target.value
            setReview(prev=>({
                ...prev,
                rating:e.target.value
            }))
           
        }
        if(isSubmittingReview){
            return <div className="flex justify-center items-center h-screen">Loading...</div>
        }

    return (
        <div className="h-[90.7vh] bg-pink-400">
        <div>
            <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 items-center "
            >
                <div className="bg-white p-20 max-lg:p-10 max-md:p-10 max-sm:p-5 mt-30 rounded-md">

            <h1 className="text-3xl font-semibold max-sm:text-2xl mb-5">Write a Review</h1>
            <textarea
                onChange={handleReviewValue}
                placeholder="Write your review here"
                className="text-lg p-3 w-160 max-lg:w-100 max-lg:h-40 max-md:h-30 max-md:w-70 h-50 outline-none resize-none border-2 border-zinc-400 rounded-md"
                />
            <div className="flex gap-3">
                <button
                type="submit"
                className="w-60  max-lg:w-30 rounded-md cursor-pointer hover:bg-orange-500 transition-all duration-150 active:scale-95 h-10 bg-orange-400 rouned-md text-white"
                >
                Send Review
                </button>
                <span className="flex flex-col ">
                <div className="flex gap-5">
                    <label htmlFor="">Rating</label>
                    <p><span ref={inputRef}>0</span>/5</p>
                </div>
                <input onChange={handleRatingValue} type="range" max="5" min="0" className="w-80 max-lg:w-60 max-md:w-40" />
                </span>
                    </div>
            </div>
            </form>
        </div>
        </div>
    );
    };

    export default AddReview;
