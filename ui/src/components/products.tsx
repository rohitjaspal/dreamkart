import axios from "axios";
import React, { useEffect, useState } from "react";
import { environment } from "../environment";

export interface Product {
  _id: string;
  title: string;
  description: string;
  quantity: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

function products() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products, setProducts] = useState<Product[]>([]);

  // useEffect( async() => {
  //   const res =  await axios.get(`${environment.baseURL}/product`)
  //   console.log(res)
  // }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // getProducts()
    console.log("Hi");
    axios.get(`${environment.baseURL}/product`).then((res) => {
      if (res.data) {
        setProducts(products);
      }
    });
  },[products]);

  // const getProducts = async () => {
  //   const products = await axios.get(`${environment.baseURL}/product`)
  //   return products.data
  // }

  return (
    <div>
      <h1>products List</h1>
      {
        products.map((p) => {
          return (
            <div>
               <h3>{p._id}</h3>
               <h3>{p.title}</h3>
               <h3>{p.description}</h3>
               <h3>{p.quantity}</h3>
               <h3>{p.updatedAt}</h3>
               <h3>{p.createdAt}</h3>
               <img src={p.imageUrl} alt="" />
            </div>
          )
        })
      }
    </div>
  );
}

export default products;
