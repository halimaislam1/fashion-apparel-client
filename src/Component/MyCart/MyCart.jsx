import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const loadedCart = useLoaderData();
  //   console.log(loadedCart);
  const [productCart, setProductCart] = useState(loadedCart);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-32 py-14">
      {productCart.map((cart) => (
        <div
          key={cart._id}
          className="card card-side w- bg-base-100
              border p-1"
        >
          <figure>
            <img className="" src={cart.photo} alt="product image" />
          </figure>
          <div className="card-body  ">
            <h2 className="card-title text-black  font-bold">{cart.name}</h2>
            <p className="font-serif">{cart.description}</p>
            <p className="font-serif">Price: {cart.price}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-serif">Rating: {cart.rating}</p>
                <p className="font-serif">Brand: {cart.brandName}</p>
              </div>
              <div>
                <button className="p-2 bg-amber-500 text-white font-bold rounded">Delete</button>
              </div>
            </div>

            {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">Add to Cart</button>
                </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCart;
