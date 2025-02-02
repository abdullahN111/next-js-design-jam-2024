"use client";

import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

import Link from "next/link";
import { MdCancel } from "react-icons/md";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const cartTotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.toString().replace(/[^0-9.]+/g, ""));
    return total + (isNaN(price) ? 0 : price * item.quantity);
  }, 0);

  return (
    <section className="max-w-[1440px] bg-white container mx-auto px-3 sm:px-6 lg:px-20 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="overflow-x-auto lg:overflow-x-visible">
            <table className="w-full min-w-[700px] border-collapse bg-white text-left text-sm">
              <thead className="bg-[#F9F1E7]">
                <tr className="text-base font-semibold">
                  <th className="p-4 border-none whitespace-nowrap">Product</th>
                  <th className="p-4 border-none whitespace-nowrap">Price</th>
                  <th className="p-4 border-none whitespace-nowrap">
                    Quantity
                  </th>
                  <th className="p-4 border-none whitespace-nowrap">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => {
                  const subtotal =
                    parseFloat(item.price.toString().replace(/[^0-9.]+/g, "")) *
                    item.quantity;

                  return (
                    <tr key={item.id} className="border-none">
                      <td className="py-4 whitespace-nowrap">
                        <div className="flex items-center justify-start space-x-5">
                          <Image
                            src={item.image}
                            alt="product"
                            width={90}
                            height={90}
                            className="rounded-md"
                          />
                          <span className="text-[#9F9F9F] text-base break-word">
                            {item.name}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-[#9F9F9F] text-base text-start whitespace-nowrap">
                        Rs. {item.price}
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-[7.4px] hover:bg-[#F9F1E7] border border-[#9F9F9F] rounded-full"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            min={1}
                            readOnly
                            onChange={(e) =>
                              updateQuantity(item.id, Number(e.target.value))
                            }
                            className="w-12 h-8 rounded border px-1 py-1 text-center focus:outline-none"
                          />
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-[6px] hover:bg-[#F9F1E7] border border-[#9F9F9F] rounded-full"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="p-4 text-black text-base font-medium text-start whitespace-nowrap">
                        <div className="flex items-center justify-start gap-8">
                          <span>Rs. {subtotal}</span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#9F9F9F] cursor-pointer"
                          >
                            <MdCancel />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-[#F9F1E7] py-8 px-11 sm:p-8 rounded-sm shadow-lg w-auto sm:w-1/2 lg:w-full mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-16">
            Cart Totals
          </h2>
          <div className="flex justify-between mb-5">
            <span className="text-base font-semibold">Subtotal</span>
            <span className="text-base text-[#9F9F9F]">Rs. {cartTotal}</span>
          </div>
          <div className="flex justify-between font-medium mb-5">
            <span className="text-base font-semibold">Total</span>
            <span className="text-xl text-[#B88E2F] font-semibold">
              Rs. {cartTotal}
            </span>
          </div>

          <Link href="/checkout">
            <button className="block mx-auto w-[200px] rounded-xl border border-black text-black px-2 py-3 text-xl hover:bg-[#fae9d3a6] transition my-10">
              Check Out
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
