import React from "react";

const LatestProduct = () => {
  return (
    <div>
      <div>
       <p className=" mt-20 mb-3 text-center text-sm text-gray-500 font-medium">SEE OUR COLLECTION</p>
      <h1 className="text-4xl text-center mb-4 font-semibold ">LATEST PRODUCTS</h1>
      <p className="text-center text-gray-400">There is a wide variation of collection,among which the following are available in latest collection.</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Product 1 */}
        <div>
          <div className="card w-96 bg-base-100  ">
            <figure className="px-10 pt-10">
              <img
                src="https://i.imgur.com/UVubRdG.png"
                alt="cloth"
                className=""
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Sweater Wide Sleeve</h2>
              <p>Fashion Colored</p>
              <p>$599.00</p>
            </div>
          </div>
        </div>
        {/* Product 2 */}
        <div>
          <div className="card w-96 bg-base-100 ">
            <figure className="px-10 pt-10">
              <img
                src="https://i.imgur.com/5UfiC7i.png"
                alt="cloth"
                className=""
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Wlouse with Ruffle</h2>
              <p>Fashion Colored</p>
              <p>$120.00</p>
            </div>
          </div>
        </div>
        {/* Product 3 */}
        <div>
          <div className="card w-96 bg-base-100 ">
            <figure className="px-10 pt-10">
              <img
                src="https://i.imgur.com/YridE3Y.png"
                alt="cloth"
                className=""
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Oversized Long T-Shirt</h2>
              <p>Fashion Colored</p>
              <p>$99.00</p>
            </div>
          </div>
        </div>
        {/* Product 4 */}
        <div>
          <div className="card w-96 bg-base-100  mb-24 ">
            <figure className="px-10 pt-10">
              <img
                src="https://i.imgur.com/YdmpzVo.png"
                alt="cloth"
                className=""
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Trilby Narrow Band</h2>
              <p>Fashion Colored</p>
              <p>$599.00</p>
            </div>
          </div>
        </div>
        {/* Product 5 */}
        <div>
          <div className="card w-96 bg-base-100  mb-24 ">
            <figure className="px-10 pt-10">
              <img
                src="https://i.imgur.com/WiOwvbo.png"
                alt="cloth"
                className=""
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Flowers Ring Detail</h2>
              <p>Fashion Colored</p>
              <p>$599.00</p>
            </div>
          </div>
        </div>
        {/* Product 6 */}
        <div>
          <div className="card w-96 bg-base-100  mb-24 ">
            <figure className="px-10 pt-10">
              <img
                src="https://i.imgur.com/wHCZfXN.png"
                alt="cloth"
                className=""
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Wini Dress Top Layer</h2>
              <p>Fashion Flat</p>
              <p>$199.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
