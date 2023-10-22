import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const allProduct = useLoaderData();
  //   console.log(allProduct);
  const { id } = useParams();
  const product = allProduct?.find((product) => product._id === id);
  console.log(product);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row border-2 shadow">
          <img
            src={product.photo}
            className="max-w-sm rounded-lg "
          />
          <div className="px-5 ">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-5">{product.name}!</h1>
           
            <div className="flex justify-between ">
            <p className="text-2xl font-semibold ">Price: {product.price}</p>
                  <div className="mr-20">
                  <span className="badge badge-outline p-3 bg-black text-white">
                    {product.brandName}
                  </span>
                  <span className="badge badge-outline p-3 bg-black text-white">{product.type}</span>
                  </div>
                </div>
            <p className="py-6">
             {product.description}
            </p>
            <button className="btn bg-amber-500 text-white">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
