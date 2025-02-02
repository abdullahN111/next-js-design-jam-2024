"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

const PaymentDetails = () => {
  const [selectedOption, setSelectedOption] = useState("Direct Bank Transfer");
  const { cartItems } = useCart();
  const cartTotal = cartItems.reduce((total, item) => {
    const price =
      typeof item.price === "string"
        ? parseFloat(item.price.replace(/[^0-9.]+/g, ""))
        : item.price;
    return total + (isNaN(price) ? 0 : price * item.quantity);
  }, 0);

  return (
    <div className="w-full sm:w-[600px] pt-10 pb-16 lg:py-[102px] px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col gap-4 mb-7">
        <div className="flex items-center justify-between">
          <h5 className="text-[21px] lg:text-[22px] font-semibold">Product</h5>
          <h5 className="text-[21px] lg:text-[22px] font-semibold">Subtotal</h5>
        </div>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-[4px] sm:gap-[6px] lg:gap-2">
              <span className="text-[15px] lg:text-base text-[#9F9F9F]">
                {item.name}
              </span>
              <span className="text-base lg:text-lg">&times;</span>
              <span className="text-sm">{item.quantity}</span>
            </div>
            <div>
              <p className="text-[15px] lg:text-base">
                Rs. {Number(item.price) * item.quantity}
              </p>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-between">
          <p className="text-[15px] lg:text-base">Subtotal</p>
          <p className="text-[15px] lg:text-base">Rs. {cartTotal}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[15px] lg:text-base">Total</p>
          <h4 className="text-lg sm:text-[22px] lg:text-2xl text-[#B88E2F] font-bold">
            Rs. {cartTotal}
          </h4>
        </div>
      </div>
      <div className="bg-[#D9D9D9] h-px w-full my-4"></div>
      <div className="flex flex-col items-start gap-[22px]">
        <div>
          <h2 className="text-lg font-semibold">Payment</h2>
          <p className="text-[#9F9F9F] text-base mt-2">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        </div>
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="paymentMethod"
              value="Direct Bank Transfer"
              checked={selectedOption === "Direct Bank Transfer"}
              onChange={() => setSelectedOption("Direct Bank Transfer")}
              className="form-radio text-[#9F9F9F] focus:ring-0"
            />
            <span className="text-base text-[#9F9F9F]">
              Direct Bank Transfer
            </span>
          </label>
          <label className="flex items-center space-x-2 mt-3">
            <input
              type="radio"
              name="paymentMethod"
              value="Cash On Delivery"
              checked={selectedOption === "Cash On Delivery"}
              onChange={() => setSelectedOption("Cash On Delivery")}
              className="form-radio text-[#9F9F9F] focus:ring-0"
            />
            <span className="text-base text-[#9F9F9F]">Cash On Delivery</span>
          </label>
        </div>
        <div>
          <p className="text-base">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <Link href="/" className="font-semibold">
              privacy policy.
            </Link>
          </p>
        </div>
        <button className="block mx-auto w-[215px] sm:w-[230px] rounded-xl border border-black text-black px-2 py-3 text-xl hover:bg-[#fae9d3a6] transition my-5">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
