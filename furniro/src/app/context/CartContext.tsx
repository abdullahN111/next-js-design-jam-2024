"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import { useUser } from "@clerk/nextjs";

export type CartItem = {
  id: string;
  name: string;
  price: number | string;
  quantity: number;
  image: string | StaticImageData;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useUser();
  const userId = user?.id;
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem(`cart_${userId}`);
      setCartItems(storedCart ? JSON.parse(storedCart) : []);
      setIsMounted(true);
    }
  }, [userId]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(`cart_${userId}`, JSON.stringify(cartItems));
    }
  }, [cartItems, isMounted, userId]);

  useEffect(() => {
    if (!userId) {
      setCartItems([]); 
    }
  }, [userId]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevItems, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };
  const clearCart = () => {
    console.log("Clearing cart...");
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  if (!isMounted) return null;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
