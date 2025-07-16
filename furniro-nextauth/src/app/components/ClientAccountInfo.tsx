"use client";

import { useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";

interface User {
  name?: string;
  email?: string;
  image?: string;
}

const ClientAccountInfo = ({ close }: { close: () => void }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/account-info");
      const data = await res.json();
      setUser(data.user);
    };
    fetchUser();
  }, []);

  return (
    <div
      className="relative px-4 py-5 sm:py-6 sm:px-5 w-[250px] xsx:w-[300px] h-[330px] sm:w-full max-w-[330px] bg-white shadow-lg z-[1001] rounded-es-md flex flex-col justify-between"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-end">
        <button className="text-[#9F9F9F]" onClick={close}>
          <ImCancelCircle size={20} />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        {user?.image && (
          <Image
            src={user.image}
            alt={user.name || "User"}
            width={70}
            height={70}
            className="rounded-full object-cover"
          />
        )}
        <p className="text-[17px] font-medium text-center">
          {user?.name || "Guest User"}
        </p>
        <p className="text-[13px] text-gray-500 text-center">
          {user?.email || "No email"}
        </p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <p className="text-gray-600 text-sm">Favorites</p>
          <FaRegHeart color="pink" />
        </div>
      </div>

      <div>
        <div className="border border-[#D9D9D9] mb-4" />
        <div className="flex justify-center">
          {user ? (
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="cursor-pointer text-xs hover:bg-[#F9F1E7] py-1 px-6 rounded-full border border-black"
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <button className="cursor-pointer text-xs hover:bg-[#F9F1E7] py-1 px-6 rounded-full border border-black">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientAccountInfo;
