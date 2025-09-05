import React from 'react'
import all_product from '../assets/Assets/Frontend_Assets/all_product'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const PopularInKids = () => {
    const products = all_product.filter((product)=>{
        return product.category === "kid"
    })

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
    <div className='mt-30 mb-20'>
    <div className='flex justify-center flex-col items-center'>
        <h1 className='text-4xl font-semibold'>Popular in Kids</h1>
        <p className='text-xl underline opacity-70'>Popular in Kids</p>
    </div>
    <Slider {...settings} className='pl-10 mt-10'>  
        {products.map((product)=>(
            <div key={product.id} className=''>
                <img src={product.image} alt="" />
                <Link to={`/product/${product.id}`}>
                <p className='text-lg max-w-sm mt-4 hover:underline'>{product.name}</p>
        <div className='flex gap-3 mb-4'>
          <p className='line-through  hover:underline text-lg'>${product.old_price}</p>
          <p className='text-lg font-semibold hover:underline  text-orange-600'>${product.new_price}</p>  
        </div>
                </Link>
            </div>
        ))}
            </Slider>
    </div>
  )
}

export default PopularInKids