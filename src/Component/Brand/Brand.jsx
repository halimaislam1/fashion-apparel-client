import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div  className=" max-w-5xl mx-auto mt-20 mb-40">
      <h1 className="text-5xl text-center mb-2 ">Our Brand</h1>
      <p className=" mb-10  text-slate-500 text-center">Here is our brand .please click here to see any brand collection</p>
        <div className=" gap-28  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">  
       {/* Naike */}
     <Link to='/nike'>
     <div className="card card-compact w-72 h-72 bg-base-100 shadow-xl">
       <figure>
         <img src="https://i.imgur.com/X5pCffz.jpg" alt="brand" />
       </figure>
       <div className="card-body ">
         <h2 className="font-semibold text-center text-xl"> Nake!</h2>
       </div>
     </div>
     </Link>
     {/* Gucci */}
     <Link to='/gucci'>
     <div className="card card-compact w-72 h-72 bg-base-100 shadow-xl">
       <figure>
         <img src="https://i.imgur.com/nxmzHzj.jpg" alt="brand" />
       </figure>
       <div className="card-body ">
         <h2 className="font-semibold text-center text-xl">Gucci!</h2>
       </div>
     </div>
     </Link>
     {/* zara*/}
     <Link to='/zara'>
     <div className="card card-compact w-72 h-72 bg-base-100 shadow-xl">
       <figure>
         <img src="https://i.imgur.com/ZAJfwnd.png" alt="brand" />
       </figure>
       <div className="card-body ">
         <h2 className="font-semibold text-center text-xl">zara!</h2>
       </div>
     </div>
     </Link>
     {/* addidas*/}
     <Link to='/adidas'>
     <div className="card card-compact w-72 h-72  bg-base-100 shadow-xl">
       <figure>
         <img src="https://i.imgur.com/18RNsYV.png" alt="brand" />
       </figure>
       <div className="card-body ">
         <h2 className="font-semibold text-center text-xl">addidas!</h2>
       </div>
     </div>
     </Link>
     {/* H & M  */}
     <Link to='/h&m'>
     <div className="card card-compact w-72 h-72 bg-base-100 shadow-xl">
       <figure>
         <img src="https://i.imgur.com/AgNM3GA.png" alt="brand" />
       </figure>
       <div className="card-body ">
         <h2 className="font-semibold text-center text-xl"> H&M!</h2>
       </div>
     </div>
     </Link>
     {/* levis*/}
     <Link to='/levis'>
     <div className="card card-compact w-72 h-72  bg-base-100 shadow-xl">
       <figure>
         <img src="https://i.imgur.com/047ix51.jpg" alt="brand" />
       </figure>
       <div className="card-body ">
         <h2 className="font-semibold text-center text-xl"> levis!</h2>
       </div>
     </div>
     </Link>
   </div>
  
    </div>
  );
};

export default Brand;
{
  /* niki: https://i.imgur.com/X5pCffz.jpg
            adida: https://i.imgur.com/aSzeYPT.jpg
            jara:https://i.imgur.com/4lYGxi7.png
            gucci: https://i.imgur.com/nxmzHzj.jpg
            h&m: https://i.imgur.com/Jwd01jo.jpg
            levies:https://i.imgur.com/047ix51.jpg
          
          */
}
