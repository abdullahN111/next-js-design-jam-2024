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
  items: OrderItem[];
  total: number;
  user: string;
  quantity: number;
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
        }
      }`;

      const orderData = await client.fetch(query, { orderId });

      if (!orderData) throw new Error("Order not found");

      setOrderDetails({
        ...orderData,
        items: orderData.items.map((item: OrderItem) => ({
          ...item,
          quantity: 1,
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
    <div className="w-full sm:w-[600px] pt-10 pb-16 lg:py-[102px] px-4 sm:px-8 lg:px-16">
      <h2 className="text-2xl font-semibold mb-4">Welcome to Furniro!</h2>
      <p className="mb-4 text-gray-600">Thank you for your purchase! Track your order below.</p>
      <input
        type="text"
        value={orderIdInput}
        onChange={(e) => setOrderIdInput(e.target.value)}
        placeholder="Enter your Order ID"
        className="border border-gray-400 p-2 rounded w-full"
      />
      <button
        onClick={() => fetchOrderDetails(orderIdInput)}
        className="bg-[#B88E2F] text-white px-4 py-2 mt-4 rounded"
      >
        Track Order
      </button>

      {showModal && orderDetails && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-[600px] w-full">
            <h2 className="text-xl font-bold mb-4">Order Details</h2>
            <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
            <p><strong>Status:</strong> {orderDetails.status}</p>
            <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>
            <p><strong>Total:</strong> ${orderDetails.total.toFixed(2)}</p>
            
            <h3 className="mt-4 font-semibold">Products:</h3>
            {orderDetails.items.map((item, index) => (
              <div key={index} className="flex justify-between my-2">
                <span>{item.title}</span>
                <span>Qty: {item.quantity}</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
            ))}
            
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
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
