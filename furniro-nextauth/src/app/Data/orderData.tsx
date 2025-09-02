import { serverClient } from "@/sanity/lib/serverClient";

export interface Order {
  _id: string;
  orderId: string;
  user: {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    streetaddress: string;
    city: string;
    province: string;
    zipcode: string;
    country: string;
  };
  items: {
    _id: string;
    title: string;
    productImage: string;
    price: number;
  }[];
  itemPrices: number[];
  itemQuantities: number[];
  total: number;
  status: string;
  dispatchedAt: string;
  paymentMethod: string;
  createdAt: string;
}

export async function fetchOrdersByUserEmail(userEmail: string): Promise<Order[]> {
  const query = `*[_type == "order" && user.email == $userEmail]{
    _id,
    orderId,
    user,
    "items": items[]->{
      _id,
      title,
      "productImage": productImage.asset->url,
      price
    },
    itemPrices,
    itemQuantities,
    total,
    status,
    paymentMethod,
    createdAt
  } | order(createdAt desc)`;

  const orders: Order[] = await serverClient.fetch(query, { userEmail });
  return orders;
}


export async function fetchOrders(): Promise<Order[]> {
  const query = `*[_type == "order"]{
    _id,
    orderId,
    user,
    "items": items[]->{
      _id,
      title,
      "productImage": productImage.asset->url,
      price
    },
    itemPrices,
    itemQuantities,
    total,
    status,
    paymentMethod,
    createdAt
  }`;

  const orders: Order[] = await serverClient.fetch(query);
  return orders;
}

export async function fetchOrderById(id: string): Promise<Order | null> {
  const query = `*[_type == "order" && _id == $id][0]{
    _id,
    orderId,
    user,
    "items": items[]->{
      _id,
      title,
      "productImage": productImage.asset->url,
      price
    },
    itemPrices,
    itemQuantities,
    total,
    status,
    paymentMethod,
    createdAt
  }`;

  const order: Order = await serverClient.fetch(query, { id });
  return order || null;
}

export async function fetchOrdersForDispatch(): Promise<Order[]> {
  const query = `*[_type == "order" && status == "Processing"]{
    _id,
    orderId,
    user,
    "items": items[]->{
      _id,
      title,
      "productImage": productImage.asset->url,
      price
    },
    itemPrices,
    itemQuantities,
    total,
    status,
    dispatchedAt,
    paymentMethod,
    createdAt
  }`;

  const orders: Order[] = await serverClient.fetch(query);
  return orders;
}

export async function fetchShippedOrders(): Promise<Order[]> {
  const query = `*[_type == "order" && status == "Shipped"]{
    _id,
    orderId,
    user,
    "items": items[]->{
      _id,
      title,
      "productImage": productImage.asset->url,
      price
    },
    itemPrices,
    itemQuantities,
    total,
    status,
    dispatchedAt,
    paymentMethod,
    createdAt
  } | order(dispatchedAt desc)`;

  const orders: Order[] = await serverClient.fetch(query);
  return orders;
}