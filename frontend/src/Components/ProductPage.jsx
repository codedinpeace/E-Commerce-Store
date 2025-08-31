          import React, { useState } from 'react'
          import { useParams } from 'react-router-dom'
          import new_collections from '../assets/Assets/Frontend_Assets/new_collections'
          import { useStore } from '../States/sizeStore.js'
          import starDull from '../assets/Assets/Frontend_Assets/star_dull_icon.png'
          import star from '../assets/Assets/Frontend_Assets/star_icon.png'

          const ProductPage = () => {
              const {id} = useParams()
              const sizes = ["S", "M", "L", "XL", "XXL"]
              const product = new_collections.find((item)=>(
                  item.id === parseInt(id)
              ))
              const {selectedSize, setSelectedSize} = useStore()

            return (
              <div>
                  <div className='mt-10 flex justify-center gap-10'>
                    <div className='w-20 flex flex-col gap-8 cursor-pointer '>
                      <img src={product.image} alt="" />
                      <img src={product.image} alt="" />
                      <img src={product.image} alt="" />
                      <img src={product.image} alt="" />
                    </div>
                      <img src={product.image} className='w-100 h-[500px]' alt="" />
                      <div> 
                      <h1 className='text-5xl font-semibold max-w-2xl mt-5'>{product.name}</h1>  
                      <p className='text-lg max-w-2xl mt-5 opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eaque facere possimus id autem nemo consectetur perferendis accusamus harum, blanditiis aut nihil, vel dicta aliquam laborum tempora eos esse debitis numquam minima fugit. Maiores, excepturi minima? Eum ab, dolorem voluptas itaque maxime, fugit quo eius corporis doloremque assumenda a officiis illo beatae id necessitatibus deleniti.</p>
                      <div className='flex gap-2 w-5 h-5 mt-5'>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={starDull} alt="" />
                        <p>(121)</p>
                      </div>
                      <div className='mt-5 mb-5 text-3xl flex gap-5'>
                        <p className="text-gray-700 line-through">${product.old_price}</p>
                        <p className='text-orange-600 font-semibold'>${product.new_price}</p>
                      </div>
                      <div className="">
                        <h1 className='text-xl font-medium mb-3'>Select Size</h1>
                        <div className='flex gap-3'>
                        {sizes.map((size)=>(
                          <button onClick={()=>setSelectedSize(size)} key={size} className={`px-4 cursor-pointer py-4 ${selectedSize === size ? "bg-orange-600 text-white" : "bg-gray-200"} active:scale-90`}>
                            {size}
                          </button>
                
              ))} 
              </div>
                      </div>
                      <div className='flex gap-5 mt-10'>
                      <button className='px-5 py-3  border-2 rounded-xl cursor-pointer transition-all duration-150 hover:bg-orange-600 hover:text-white border-orange-600'>Add to Cart</button>
                      <button className='px-5 py-3 bg-orange-600 border-2 rounded-xl transition-all duration-150   hover:bg-transparent hover:text-black text-white cursor-pointer border-orange-600'>Buy Now</button>
                      </div>
                      </div>
                  </div>
              </div>
            )
          }

          export default ProductPage