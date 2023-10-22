import { Link } from "react-router-dom";

const HMCard = ({product}) => {
  const {_id, name,
    type,
    description,
    price,
    rating,
    brandName,
    photo,} = product;


    return (
        <div>
        <div className="card card-compact w-96 bg-base-100 shadow  mx-auto mb-28">
          <figure>
            <img className="h-96 " src={photo} alt="brandImage" />
          </figure>
          <div className="card-body">
            <div>
              <h2 className="card-title">
                <p className="font-bold ">{name}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline ">{brandName}</div>
                  <div className="badge badge-outline">{type}</div>
                </div>
              </h2>
              <p className="font-semibold">rating: {rating}</p>
            </div>
              <p className="font-semibold">Price: {price}</p>
            <p>{description}</p>
            <div className="card-actions justify-end">
             <Link to={`/details/${_id}`}> <button className="btn  bg-amber-500 font-extrabold  text-white">Details</button></Link>
              <Link to={`/updateProduct/${_id}`}><button className="btn bg-amber-500 font-extrabold   text-white">Update</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HMCard;