import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import LavisCard from "../LavisCard/LavisCard";

const Lavis = () => {
  const allBrandProduct = useLoaderData();
  const Levis = allBrandProduct.filter(
    (product) => product.brandName.toLowerCase() === "Levi's".toLowerCase()
  );
  // console.log(allBrandProduct);
  // console.log(Levis);

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
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://wuso-theme.myshopify.com/cdn/shop/files/img-1_1920X_cb5b5699-8d84-49fc-b132-6cf2b135d028.jpg?)",
            }}
          >
            <div className=""></div>
            <div className=" ml-6 md:mr-96  md:pr-32 py-4 mt-5">
              <div className="max-w-md ">
                <h1 className="mb-2 text-md md:text-5xl font-bold">
                  Latest Collection
                </h1>
                <p className="mb-5  text-sm md:text-md">
                  Discover the latest Collection fashion trends.comes in a wide
                  range of sizes to accommodate children of different ages and
                  growth stages. Proper fit is essential to ensure comfort and
                  ease of movement.
                </p>
                <button className="btn text-xl bg-amber-500 text-white">
                  40%OFF
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slider 2 */}
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: "url(https://i.imgur.com/cS7OZXu.jpg)" }}
          >
            <div className=""></div>
            <div className="  lg:mr-96  md:pr-32">
              <div className="max-w-md ">
                <h1 className="mb-5 text-2xl md:text-5xl font-bold  mt-16 md:mt-0">
                  Fashionable Collection
                </h1>
                <p className="mb-5  text-sm md:text-md">
                  Discover the Collection fashion trends.comes in a wide range
                  of sizes to accommodate children of different ages and growth
                  stages. Proper fit is essential to ensure comfort and ease of
                  movement.
                </p>
                <button className="btn text-xl bg-amber-400 text-white">
                  20%OFF
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slider 3 */}
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: "url(https://i.imgur.com/ZWnzNyL.jpg)" }}
          >
            <div className=""></div>
            <div className=" ">
              <div className="max-w-md mt-20 md:mt-10">
                <h1 className=" text-xl md:text-5xl text-white font-bold mb-4">
                  Summer Collection
                </h1>
                <p className="mb-5  text-sm text-white md:text-md ">
                  Discover the summer Collection fashion trends.comes in a wide
                  range of sizes to accommodate children of different ages and
                  growth stages. Proper fit is essential to ensure comfort and
                  ease of movement.
                </p>
                <button className="btn text-xl bg-amber-400 text-white">
                  60%OFF
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <h2 className="text-3xl mt-32 mb-4 font-semibold text-center">
        ----- Our Product Category ----
      </h2>
      <p className="text-center mb-12 text-slate-500 ">
        These collections focus on the latest fashion trends and feature items
        that are <br /> currently in vogue.there are some latest product .
      </p>
      <div className={Levis.length !== 0 && "block"}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Levis.map((product) => (
            <LavisCard key={product._id} product={product}></LavisCard>
          ))}
        </div>
      </div>
      <div className={Levis.length== 0 ? 'block' : 'hidden'}>
           <p className="text-3xl text-center  pb-8">  There is No data found</p>
      </div>
    </div>
  );
};

export default Lavis;
