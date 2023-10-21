
const LavisCard = ({product}) => {
    return (
        <div>
        <div className="card card-compact w-96 bg-base-100 shadow  mx-auto mb-28">
          <figure>
            <img className="h-96 " src={product.photo} alt="brandImage" />
          </figure>
          <div className="card-body">
            <div>
              <h2 className="card-title">
                <p className="font-bold ">{product.name}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline ">{product.brandName}</div>
                  <div className="badge badge-outline">{product.type}</div>
                </div>
              </h2>
              <p className="font-semibold">rating: {product.rating}</p>
            </div>
              <p className="font-semibold">Price: {product.price}</p>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <button className="btn  bg-amber-500 font-extrabold  text-white">Details</button>
              <button className="btn bg-amber-500 font-extrabold   text-white">Update</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LavisCard;