import {  useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const MyCart = () => {
  const loadedCart = useLoaderData();
  const [productCart, setProductCart] = useState(loadedCart);
  console.log(productCart);
  const {user} = useContext(AuthContext);
  const userEmail = user.email
  const userProducts = productCart.filter(products => products.userEmail === userEmail)

  const handleDelete =(_id) =>{
    //  console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/cart/${_id}`,{
            method: 'DELETE',

          })
          .then(res => res.json())
          .then(data =>  {
            console.log(data);
       
              if(data.deletedCount > 0){
                Swal.fire(
                    'Deleted!',
                    'Your product has been deleted.',
                    'success'
                  ) 
                //   window.location.reload()
                  const remaining = userProducts.filter(cart => cart._id !== _id)
                  setProductCart(remaining)
               }
            
          })
        }

      })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-32 py-14">
      {
      userProducts?.map((cart) => (
        <div
          key={cart._id}
          className="card card-side w- bg-base-100  border p-1"
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
                <button onClick={() => handleDelete(cart._id)} className="p-2 bg-amber-500 text-white font-bold rounded">Delete</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCart;
