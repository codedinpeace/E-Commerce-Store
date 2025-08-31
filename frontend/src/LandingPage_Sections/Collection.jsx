import React from 'react'
import new_collections from '../assets/Assets/Frontend_Assets/new_collections'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'

const Collection = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
        <div>
            <div className='flex flex-col items-center justify-center mt-5 mb-10'>
            <h1 className='text-3xl font-semibold '>New Collections</h1>
            <p className='text-xl underline underline-offset-2 mb-10 opacity-70'>Our Most New Collections</p>
            </div>
            {/* <div className='flex flex-wrap justify-around'> */}
            <Slider {...settings} className='pl-10'>  
            {new_collections.map((collection)=>(
                <div key={collection.id}>
                    <Link to={`/product/${collection.id}`}>
                <img src={collection.image} className='w-90 max-md:w-50 cursor-pointer hover:scale-105 transition-all duration-150' alt="" />
                    </Link>
                </div>
            ))}
            </Slider>
            {/* </div> */}
        </div>
    </div>
  )
}

export default Collection