"use client";

import Image from "next/image";
import { ProductCardData } from "@/app/Data/index";
import { useParams } from "next/navigation";

import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

const ProductDetail = () => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams<{ id: string }>();

  const product = ProductCardData.find((item) => item.id === parseInt(id));
  if (!product) {
    return (
      <div className="text-center mt-10">
        <p>Product not found. Please check the URL.</p>
        <a href="/" className="text-blue-500 underline">
          Go back to products
        </a>
      </div>
    );
  }

  const handleIncrement = () => {
    if (quantity < product.inventoryInStock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };
  const handleDecrement = () =>
    setQuantity((itemDecre) => (itemDecre > 1 ? itemDecre - 1 : 1));

  return (
    <div className="w-full mx-auto py-10 mb-12 px-6 sm:px-10 lg:px-24 font-poppins flex flex-col lg:flex-row gap-10 lg:gap-6">
      <div className="basis-[40%] flex flex-col lg:flex-row gap-6">
        <div className="flex flex-row lg:flex-col gap-3 sm:gap-5 md:gap-7">
          {product.sideImages.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`Product side image ${idx + 1}`}
              className="bg-[#F9F1E7] rounded-md w-auto max-w-[50px] sm:max-w-[63px] md:max-w-[70px] lg:max-w-[75px]"
            />
          ))}
        </div>
        <div>
          <div className="flex justify-center items-center bg-[#F9F1E7] rounded-md w-auto h-[300px] lg:h-[500px]">
            <Image
              src={product.image}
              alt={`${product.name} main image`}
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="basis-[60%]">
        <div className="flex flex-col gap-[6px] items-start">
          <h1 className="text-[40px]">{product.name}</h1>
          <p className="text-[#9F9F9F] text-2xl">Rs. {product.price}.00</p>
          <div className="flex items-center gap-5 my-1">
            <p className="text-[#FFC700] text-lg">{product.stars.join(" ")}</p>
            <div className="h-[30px] w-px bg-[#9F9F9F]"></div>
            <p className="text-[13px] text-[#9F9F9F]">{product.reviews}</p>
          </div>
          <p className="text-[13px]">{product.description}</p>
          <div className="flex flex-col gap-3 mt-2">
            <p className="text-[#9F9F9F] text-sm">Size</p>
            <div className="flex gap-2">
              <div className="text-center content-center w-[28px] h-[28px] text-[13px] bg-[#B88E2F] text-white rounded-md">
                L
              </div>
              <div className="text-center content-center w-[28px] h-[28px] text-[13px] text-black bg-[#F9F1E7] rounded-md">
                XL
              </div>
              <div className="text-center content-center w-[28px] h-[28px] text-[13px] text-black bg-[#F9F1E7] rounded-md">
                XS
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-3 mt-2">
              <p className="text-[#9F9F9F] text-sm">Color</p>
              <div className="flex gap-2">
                <div className="w-[28px] h-[28px] bg-[#816DFA] rounded-full"></div>
                <div className="w-[28px] h-[28px] bg-[#000000] rounded-full"></div>
                <div className="w-[28px] h-[28px] bg-[#B88E2F] rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-4 sm:gap-2 mt-6 items-start sm:items-center text-base">
            <div className=" hover:bg-[#F9F1E7] flex gap-6 mr-4 border border-[#9F9F9F] rounded-md py-2 px-3">
              <span
                className="text-[#] cursor-pointer"
                onClick={handleDecrement}
              >
                -
              </span>
              <button>{quantity}</button>
              <span className="cursor-pointer" onClick={handleIncrement}>
                +
              </span>
            </div>
            <div className="cursor-pointer hover:bg-[#F9F1E7] py-2 px-5 rounded-lg border border-black">
              <button
                onClick={() => {
                  if (product.inventoryStatus === true) {
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      quantity: quantity,
                      image: product.image,
                    });
                    setQuantity(1);
                  }
                }}
              >
                Add To Cart
              </button>
            </div>
            <div className="cursor-pointer hover:bg-[#F9F1E7] flex items-center gap-3 py-2 px-5 rounded-lg border border-black">
              <button>Stock: {product.inventoryInStock}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
