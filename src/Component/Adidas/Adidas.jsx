import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AdidasCard from "../AdidasCard/AdidasCard";




const Adidas = () => {
    const allBrandProduct = useLoaderData();
    const Nike = allBrandProduct.filter(
      (product) => product.brandName.toLowerCase() === "Adidas".toLowerCase()
    );
    console.log(allBrandProduct);
    console.log(Nike);

    return (
        <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
           {/* Slider-1 */}
            <div
              className="hero min-h-screen "
              style={{ backgroundImage: "url(https://i.imgur.com/NTubAKy.jpg)" }}
  
            >
              <div className="ml-52 md:ml-96 pl-0 lg:pl-72 ">
                <div className="max-w-md ">
                  <h1 className="mb-5 text-2xl md:text-5xl font-bold">Women New Arrival</h1>
                  <p className="mb-5 text-sm md:text-md">
                  Discover the women new arrival fashion trends. The choice of materials and fabrics is crucial in dress collections. Designers select fabrics that suit the season and occasion.
                  </p>
                  <button className="btn text-xl bg-amber-500 text-white">30%OFF</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slider 2 */}
          <SwiperSlide>
              <div
              className="hero min-h-screen"
              style={{ backgroundImage: "url(https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo4/slider/slide-1.jpg)" }}
            >
              <div className=" md:mr-56">
                <div className="max-w-md mt-12">
                  <h1 className="mb-5 text-2xl md:text-5xl text-black 
                  font-bold">Summer Sale</h1>
                  <p className="mb-5 text-sm text-black md:text-md mr-20">
                  Discover the hottest summer fashion trends. From breezy sundresses to stylish swimwear, you will be the trendsetter at every beach and pool party.
                  </p>
                  <button className="btn md:text-xl  bg-amber-500 text-white ">30%OFF</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
           {/* Slider 3 */}
          <SwiperSlide>
          <div
              className="hero min-h-screen"
              style={{ backgroundImage: "url(https://pukabop-store-demo.myshopify.com/cdn/shop/files/2-big.jpg)" }}
            >
              <div className=""></div>
              <div className=" ml-48 md:ml-96">
                <div className="max-w-md ">
                  <h1 className="mb-2 text-xl md:text-5xl font-bold   ">Kids Collection</h1>
                  <p className="mb-5  text-sm text-slate-500 md:text-md">
                  Discover the kids Collection fashion trends.comes in a wide range of sizes to accommodate children of different ages and growth stages. Proper fit is essential to ensure comfort and ease of movement.
                  </p>
                  <button className="btn text-xl bg-red-400 text-white">10%OFF</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
  
        <h2 className="text-3xl mt-32 mb-4 font-semibold text-center">
          ----- Our Product Category ----
        </h2>
        <p className="text-center mb-12 text-slate-500 ">
          These collections focus on the latest fashion  trends and feature items
          that are  <br /> currently in vogue.there are some latest product .
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Nike.map((product) => (
            <AdidasCard key={product._id} product={product}></AdidasCard>
          ))}
        </div>
      </div>
    );
};

export default Adidas;