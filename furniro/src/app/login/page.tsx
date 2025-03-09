"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/app/public/assets/images/main/Logo.png";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row py-16">
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-5 sm:px-8 lg:px-16 text-center bg-white lg:shadow-none border-b lg:border-none border-gray-200 py-8 lg:py-0">
        <Image
          src={Logo}
          alt="Furniro Logo"
          width={90}
          height={90}
          className="mb-4"
        />
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#B88E2F] mb-4">
          Furniro
        </h2>
        <p className="text-base lg:text-lg max-w-md leading-relaxed text-gray-700">
          Elevate your living space with timeless, high-quality furniture.
          Explore our collection today and experience the perfect blend of style
          and comfort.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-5 sm:px-8 lg:px-16 bg-white lg:rounded-lg py-8 lg:py-0 min-h-[80vh]">
        <div className="text-center w-full max-w-sm">
        
          <SignedIn>
            <UserButton />
          </SignedIn>
          <h2 className="text-[26px] lg:text-3xl font-bold text-[#B88E2F] my-4">
            Unlock Your Home’s Elegance
          </h2>
          <p className="text-[#666] text-sm lg:text-base mb-6">
            Sign in now and start creating your dream space with our premium
            furniture.
          </p>
        </div>
        <SignedIn />

        <SignedOut>
          <form className="w-full max-w-sm flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-lg font-semibold">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="text-base text-[#333] border border-[#B88E2F] py-3 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
              />
            </div>

            <div className="flex flex-col gap-2 relative">
              <label className="text-base sm:text-lg font-semibold">
                Password
              </label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="text-base text-[#333] border border-[#B88E2F] py-3 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                />
                <button
                  type="button"
                  className="absolute right-4 top-3 text-gray-500 hover:text-[#B88E2F]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center w-full text-sm">
              <label className="flex text-sm md:text-base items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#B88E2F] accent-[#B88E2F]"
                />
                Remember me
              </label>
              <a href="#" className="text-[#B88E2F] hover:underline">
                Forgot Password?
              </a>
            </div>
          </form>
          <button className="text-white text-lg bg-[#B88E2F] hover:bg-[#b88f2ff8] rounded-md py-3 px-6 font-semibold shadow-md transition duration-300 w-full max-w-sm mt-6">
            <SignInButton />
          </button>
        </SignedOut>
      </div>
    </div>
  );
};

export default LoginPage;
