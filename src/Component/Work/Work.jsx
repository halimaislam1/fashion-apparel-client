import React from "react";

const Work = () => {
  return (
    <div className=" mb-20 ">
      <h1 className="text-center  text-5xl text-blue-950 font-bold mb-3 ">How We Work??</h1>
      <p className="text-center mb-12  text-xl">We try to make our service fast and convenient for you!</p>

      <div className="max-w-6xl  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-24 md:ml-40 md:gap-10  ">
        <div className="mb-8 md:mb-0">
          <img className="mb-3 ml-20" src="https://i.imgur.com/2TsO2Ti.png" alt="" />
          <p className="text-blue-950 ml-20 font-bold text-xl">Order</p>
          <p >Our manager will  contact you  to <br />  discuss all  the details  of your order.</p>
        </div>
        <div className="mb-8 md:mb-0">
          <img className="mb-2 ml-24" src="https://i.imgur.com/taqj3n4.png" alt="" />
          <p className="text-blue-950 ml-20  font-bold text-xl">Delivery</p>
          <p>Delivery of your order by our service, at <br /> any time convenient for you</p>
        </div>
         <div className="mb-8 md:mb-0">
            <img className="mb-2 ml-20" src="https://i.imgur.com/fVYjnPq.png" alt="" />
            <p className="text-blue-950 ml-20  font-bold text-xl">Done</p>
          <p>Your order is in your hand! Enjoy <br /> the apparel you ordered</p>
            <p>Done!</p>
         </div>
       </div>
    </div>
  );
};

export default Work;
