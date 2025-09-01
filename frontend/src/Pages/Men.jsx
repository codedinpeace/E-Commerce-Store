  import React from 'react'
  import menBanner from '../assets/Assets/Frontend_Assets/banner_mens.png'
  import menProducts from '../assets/Assets/Frontend_Assets/all_product.js'
  import { Link } from 'react-router-dom'


  const Men = () => {
    const product = menProducts.filter((product)=>{
    return product.category === "men"
    })

    return (


      <div>
        <div className='flex justify-center'>
          <img src={menBanner} className='mt-5 mb-20' alt="" />
        </div>
        <div>
          <div  className='flex justify-around flex-wrap'>
          {product.map((p)=>(
            <div key={p.id} className='flex flex-col max-sm:items-center'>
                <Link to={`/product/${p.id}`}>
              <img src={p.image} className='cursor-pointer hover:scale-105 transition-all duration-150 hover:shadow-lg group max-sm:w-70 ' alt="" />
              <p className='text-lg max-w-sm mt-3 mb-2 max-sm:max-w-[300px] max-sm:text-center'>{p.name}</p>
              </Link>
              <div className='flex gap-3 max-sm:justify-center'>
                <p className='font-semibold text-orange-600 text-lg max-sm:text-center'>${p.new_price}</p>
                <p className='line-through text-gray-600 text-lg mb-5 max-sm:text-center'>${p.old_price}</p>
              </div>
              </div>
          ))}
          </div>
        </div>
      </div>
    )
  }

  export default Men