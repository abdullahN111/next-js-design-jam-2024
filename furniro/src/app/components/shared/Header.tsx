"use client";

import Image from "next/image";
import Logo from "@/app/public/assets/images/main/Logo.png";
import { TbUserExclamation } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FcMenu } from "react-icons/fc";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

import CartItems from "@/app/components/CartItems";
import SmNavbar from "@/app/components/shared/SmNavbar";
import LgNavbar from "@/app/components/shared/LgNavbar";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const { cartItems } = useCart();

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const toggleCart = () => {
    setOpenCart((prev) => !prev);
  };

  return (
    <header className={`bg-[#FFFFFF] mx-auto max-w-[1440px] h-24 px-6 lg:px-[54px] ${cartItems.length > 0 ? "sticky top-0 z-[1000]" : ""}`}>
      <div className="flex items-center justify-between h-full">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="furniro logo" width={46} height={30} />
            <h2 className="text-[24px] md:text-[34px] font-bold font-montserrat">
              Furniro
            </h2>
          </div>
        </Link>

        {/* large screens */}
        <LgNavbar />

        <div className="hidden lg:flex text-[26px] gap-8">
          <Link
            href="/"
            className="cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow"
          >
            <TbUserExclamation />
          </Link>
          <Link
            href="/"
            className="cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow"
          >
            <FiSearch />
          </Link>
          <Link
            href="/"
            className="cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow"
          >
            <FaRegHeart />
          </Link>
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              toggleCart();
            }}
            className="relative cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow"
          >
            <MdOutlineLocalGroceryStore />
            {cartItems.length > 0 && (
              <div className="absolute top-[-8px] right-[-8px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </div>
            )}
          </Link>
        </div>
        {/* small screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="relative text-3xl">
            <FcMenu />
            {cartItems.length > 0 && (
              <div className="absolute top-[-8px] right-[-8px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </div>
            )}
          </button>
        </div>
      </div>

      {/* menu bar */}
      {openMenu && (
        <div
          className="absolute top-[100px] left-0 w-full py-6 bg-[#FFFFFF] shadow-md z-[1000]"
          onClick={closeMenu}
        >
          <SmNavbar closeMenu={closeMenu} />
          <div className="flex justify-center gap-6 py-4 text-[25px]">
            <Link
              href="/"
              onClick={closeMenu}
              className="cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow"
            >
              <TbUserExclamation />
            </Link>
            <Link
              href="/"
              onClick={closeMenu}
              className="cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow"
            >
              <FiSearch />
            </Link>
            <Link
              href="/"
              onClick={closeMenu}
              className="cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow"
            >
              <FaRegHeart />
            </Link>
            <button
              onClick={toggleCart}
              className="relative cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow"
            >
              <MdOutlineLocalGroceryStore />
              {cartItems.length > 0 && (
                <div className="absolute top-[-8px] right-[-8px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </div>
              )}
            </button>
          </div>
        </div>
      )}

      {openCart && (
        <div
          className="fixed right-0 top-0 inset-0 w-full h-screen bg-black bg-opacity-20 z-[1000] flex justify-end transition-all ease-in-out duration-300"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setOpenCart(false);
            }
          }}
        >
          <CartItems closeCart={() => setOpenCart(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
