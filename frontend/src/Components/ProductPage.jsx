import React, { useState } from "react";
import { useParams } from "react-router-dom";
import new_collections from "../assets/Assets/Frontend_Assets/new_collections";
import { useStore } from "../States/sizeStore.js";
import starDull from "../assets/Assets/Frontend_Assets/star_dull_icon.png";
import star from "../assets/Assets/Frontend_Assets/star_icon.png";
import { Link } from "react-router-dom";
import all_product from "../assets/Assets/Frontend_Assets/all_product.js";
import ReviewSection from "./ReviewSection.jsx";

const ProductPage = () => {
  const { id } = useParams();
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const collectionProduct = new_collections.find(
    (item) => item.id === parseInt(id)
  );
  const menProduct = all_product.filter((men) => {
    return men.category === "men";
  });
  const womenProduct = all_product.filter((men) => {
    return men.category === "women";
  });
  const kidsProduct = all_product.filter((men) => {
    return men.category === "kid";
  });

  const all_products = [
    ...new_collections,
    ...menProduct,
    ...womenProduct,
    ...kidsProduct,
  ];

  const product = all_products.find((p) => String(p.id) === id);

  const { selectedSize, setSelectedSize } = useStore();

  return (
    <div>
      <div className="mt-10 flex justify-center  max-md:flex-col max-md:items-center  gap-10 max-xl:gap-5">
        <div className="w-20 max-2xl:w-16  max-md:hidden flex-col  flex  max-md:justify-center gap-8 max-2xl:gap-4 cursor-pointer ">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <img
          src={product.image}
          className="w-100 max-2xl:w-80 max-2xl:h-[420px] h-[500px]"
          alt=""
        />
        <div>
          <h1 className="text-5xl max-lg:text-2xl  max-lg:max-w-[300px] max-md:max-w-md max-md:mx-auto max-md:text-center max-2xl:text-3xl max-2xl:max-w-md font-semibold max-w-2xl mt-5">
            {product.name}
          </h1>
          <p className="text-lg max-w-2xl max-sm:max-w-[300px] max-sm:mx-auto max-lg:text-[14px] max-lg:max-w-[300px] mt-5 max-2xl:text-[16px] max-md:text-center max-md:max-w-md max-2xl:max-w-md opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            eaque facere possimus id autem nemo consectetur perferendis
            accusamus harum, blanditiis aut nihil, vel dicta aliquam laborum
            tempora eos esse debitis numquam minima fugit. Maiores, excepturi
            minima? Eum ab, dolorem voluptas itaque maxime, fugit quo eius
            corporis doloremque assumenda a officiis illo beatae id
            necessitatibus deleniti.
          </p>
          <div className="flex gap-2 max-md:justify-center   mt-5 ">
            <img src={star} className="w-5 h-5" alt="" />
            <img src={star} className="w-5 h-5" alt="" />
            <img src={star} className="w-5 h-5" alt="" />
            <img src={star} className="w-5 h-5" alt="" />
            <img src={starDull} alt="" />
            <p>(121)</p>
          </div>
          <div className="mt-5 mb-5 text-3xl flex gap-5 max-md:justify-center">
            <p className="text-gray-700 line-through">${product.old_price}</p>
            <p className="text-orange-600 font-semibold">
              ${product.new_price}
            </p>
          </div>
          <div className="max-md:flex-col max-md:flex max-md:items-center">
            <h1 className="text-xl font-medium mb-3">Select Size</h1>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  onClick={() => setSelectedSize(size)}
                  key={size}
                  className={`px-4 max-lg:text-[12px] cursor-pointer py-4 ${
                    selectedSize === size
                      ? "bg-orange-600 text-white"
                      : "bg-gray-200"
                  } active:scale-90`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-5 mt-10 max-md:justify-center">
            <button className="px-5 py-3  border-2 rounded-xl cursor-pointer transition-all duration-150 hover:bg-orange-600 hover:text-white border-orange-600">
              Add to Cart
            </button>
            <button className="px-5 py-3 bg-orange-600 border-2 rounded-xl transition-all duration-150   hover:bg-transparent hover:text-black text-white cursor-pointer border-orange-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center mt-10 mb-10">
          <h1 className="text-3xl font-medium  ">User Reviews</h1>
        </div>

        <ReviewSection />
        <div className="flex justify-center text-xl mt-10">
          <Link to={`/product/${product.id}/add-review`}>
            <button className="bg-orange-600 px-6 py-2 rounded-xl text-white border-2 border-orange-600 hover:bg-transparent transition-all duration-175 cursor-pointer hover:text-black">
              Add a review
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
