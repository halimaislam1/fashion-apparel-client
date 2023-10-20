import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const type = form.type.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const newProduct = {
      name,
      type,
      description,
      price,
      rating,
      brandName,
      photo,
    };
    console.log(newProduct);

    //send data to the server
    fetch('http://localhost:5000/fashion',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Product added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
        
    })
  };

  return (
    <div className="max-w-5xl mx-auto mt-20">
      <div className="bg-[#F4F3F0] p-14 mb-20">
        <h2 className="text-center mb-5 text-3xl  font-bold font-serif">
          Add Your Product
        </h2>
        <form onSubmit={handleAddProduct}>
          {/* Name */}
          <div className="md:flex justify-center gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text"> Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/*Brand Name*/}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <select className="select select-bordered " name='brandName'>
                      <option value="Nike">Nike</option>
                      <option value="Gucchi">Gucchi</option>
                      <option value="zara">zara</option>
                      <option value="Adidas">Adidas</option>
                      <option value="H&M">H&M</option>
                      <option value="Levi's">Levis</option>
                  </select>
            </div>
          </div>
          {/* Type*/}
          <div className="md:flex justify-center gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
                  <select className="select select-bordered " name='type'>
                      <option value="Women">Women collection</option>
                      <option value="Man">Man collection</option>
                      <option value="Baby">Baby collection</option>
                  </select>
            </div>
            {/* Price */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
  
          <div className="md:flex justify-center gap-5">
             {/* Short Description*/}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Short Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* Rating */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Image Url*/}
          <div className=" justify-center gap-5">
            <div className="form-control  w-1/2">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <input
              type="submit"
              value="Add Product"
              className="btn btn-block border-2 bg-amber-600 text-white mt-5"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
