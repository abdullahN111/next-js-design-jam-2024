"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { ProductCardData, fetchProducts } from "@/app/Data/index";
import { useState, useEffect } from "react";
import { useCart } from "@/app/context/CartContext";

const ProductDetail = () => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<ProductCardData[] | null>(null);

  useEffect(() => {
    async function loadProducts() {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    }
    loadProducts();
  }, []);

  if (!products) {
    return <p className="text-center my-16">Loading product details...</p>;
  }

  const product = products.find(
    (item) => item._id === id || item.slug?.current === id
  );

  if (!product) {
    return (
      <div className="text-center my-16">
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
      <div className="basis-full lg:basis-[40%] flex flex-col lg:flex-row gap-6">
        <div className="flex flex-row lg:flex-col gap-3 sm:gap-4 overflow-x-auto lg:overflow-visible">
          {product.sideImages?.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`Product side image ${idx + 1}`}
              width={80}
              height={80}
              className="bg-[#F9F1E7] rounded-md w-16 sm:w-20 h-16 sm:h-20 object-cover hover:scale-105 transition-transform"
            />
          ))}
        </div>
        <div className="flex-1">
          <div className="bg-[#F9F1E7] rounded-md aspect-square lg:aspect-[3/4] w-full h-auto lg:h-[300px]">
            <Image
              src={product.image}
              alt={`${product.title} main image`}
              width={600}
              height={600}
              className="w-full h-full object-contain p-6"
            />
          </div>
        </div>
      </div>

      <div className="basis-full lg:basis-[60%]">
        <div className="flex flex-col gap-[6px] items-start">
          <h1 className="text-[30px] sm:text-[40px]">{product.title}</h1>
          <p className="text-[#9F9F9F] text-xl sm:text-2xl">$ {product.price}.00</p>
          <div className="flex items-center gap-5 my-1">
            <p className="text-[#FFC700] text-lg">{product.stars.join(" ")}</p>
            <div className="h-[30px] w-px bg-[#9F9F9F]"></div>
            <p className="text-[13px] text-[#9F9F9F]">{product.reviews}</p>
          </div>
          <p className="text-[14px] sm:text-[15px]">{product.description}</p>
          <div className="flex flex-col gap-3 mt-2">
            <p className="text-[#9F9F9F] text-sm">Tags</p>
            <div className="flex flex-wrap gap-2">
              {product.tags.split(", ").map((tag, index) => (
                <div
                  key={index}
                  className="text-center content-center px-3 py-1 text-[13px] text-black bg-[#F9F1E7] rounded-md"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-4 sm:gap-2 mt-6 items-start sm:items-center text-base">
            <div className="hover:bg-[#F9F1E7] flex gap-6 border border-[#9F9F9F] rounded-md py-2 px-3">
              <span className="cursor-pointer" onClick={handleDecrement}>-</span>
              <button>{quantity}</button>
              <span className="cursor-pointer" onClick={handleIncrement}>+</span>
            </div>
            <div className="cursor-pointer hover:bg-[#F9F1E7] py-2 px-5 rounded-lg border border-black">
              <button
                onClick={() => {
                  if (product.inventoryInStock > 0) {
                    addToCart({
                      id: product._id,
                      name: product.title,
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
