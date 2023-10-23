import { useContext } from "react"; 
import {  useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider"; 

const Details = () => {
  const allProduct = useLoaderData();
  const { id } = useParams();
  const product = allProduct?.find((product) => product._id === id);
  const {user} = useContext(AuthContext) 
  console.log(user);

  const handleAddToCart = () => {
    const userEmail = user.email  
    const userProduct = {
      ...product, userEmail
    }

    fetch('https://fashion-apparel-server-bice.vercel.app/cart',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        userProduct
      )
  })
     .then(res => res.json())
     .then(data => {
        console.log(data);
        if(data.acknowledged == true){
          Swal.fire({
              title: 'Success!',
              text: 'Product added successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
      }
     })
  }
    

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
          <button onClick={handleAddToCart} className="btn bg-amber-500 text-white">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
