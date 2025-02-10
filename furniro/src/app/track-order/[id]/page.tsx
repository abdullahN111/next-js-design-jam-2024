"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";

interface OrderItem {
  _key: string;
  title: string;
  quantity: number;
  price: number;
}

interface OrderDetails {
  orderId: string;
  paymentMethod: string;
  status: string;
  total: number;
  user: string;
  items: OrderItem[];
  itemQuantities: number[];
}

const OrderTracking = ({ params }: { params: { id: string } }) => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [orderIdInput, setOrderIdInput] = useState("");
  const [showModal, setShowModal] = useState(false);

  const fetchOrderDetails = async (orderId: string) => {
    try {
      const query = `*[_type == "order" && orderId == $orderId][0]{
        orderId,
        paymentMethod,
        status,
        total,
        user,
        items[]->{
          title,
          price,
          _key
        },
        itemQuantities
      }`;

      const orderData = await client.fetch(query, { orderId });

      if (!orderData) throw new Error("Order not found");

      setOrderDetails({
        ...orderData,
        items: orderData.items.map((item: OrderItem, index: number) => ({
          ...item,
          quantity: orderData.itemQuantities[index] || 1,
        })),
      });

      setShowModal(true);
    } catch (error) {
      console.error("Error fetching order details:", error);
      alert("Order not found!");
    }
  };

  useEffect(() => {
    if (params.id) fetchOrderDetails(params.id);
  }, [params.id]);

  return (
    <div className="w-full max-w-[600px] mx-auto pt-10 pb-16 px-6 sm:px-8 lg:px-16">
      <h2 className="text-3xl font-semibold mb-2 text-center">
        Thank you for your purchase!
      </h2>
      <p className="mb-8 text-lg text-gray-600 text-center">
        We are processing your order.
      </p>
      <p className="mb-3 text-gray-600 font-semibold">
        Track your order below.
      </p>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={orderIdInput}
          onChange={(e) => setOrderIdInput(e.target.value)}
          placeholder="Enter your Order ID"
          className="border border-gray-400 p-2 rounded w-full"
        />
        <button
          onClick={() => fetchOrderDetails(orderIdInput)}
          className="bg-[#B88E2F] text-white px-5 py-2 rounded"
        >
          Track
        </button>
      </div>

      {showModal && orderDetails && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 lg:p-8 mx-4 lg:mx-0 rounded-lg max-w-[500px] w-full shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">
              Order Details
            </h2>

            <div className="grid grid-cols-2 gap-4 text-gray-700 text-base border-b pb-4">
              <p>
                <strong>Order ID:</strong> {orderDetails.orderId}
              </p>
              <p>
                <strong>Status:</strong> {orderDetails.status}
              </p>
              <p>
                <strong>Payment:</strong> {orderDetails.paymentMethod}
              </p>
              <p>
                <strong>Total:</strong> ${orderDetails.total.toFixed(2)}
              </p>
            </div>

            <h3 className="mt-4 text-lg font-semibold">Products:</h3>
            <div className="mt-2 space-y-3">
              {orderDetails.items.map((item) => (
                <div
                  key={item._key}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <span className="w-1/2">{item.title}</span>
                  <span className="w-1/4 text-center">
                    Qty: {item.quantity}
                  </span>
                  <span className="w-1/4 text-right">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
