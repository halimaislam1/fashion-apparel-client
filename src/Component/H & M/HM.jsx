import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HMCard from "../HMCard/HMCard";

const HM = () => {
  const allBrandProduct = useLoaderData();
  const HM = allBrandProduct.filter(
    (product) => product.brandName.toLowerCase() === "H&M".toLowerCase()
  );
  // console.log(allBrandProduct);
  // console.log(HM);

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
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* Slider-1 */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://st-mina.myshopify.com/cdn/shop/t/2/assets/slideshow_image_1.jpg)",
            }}
          >
            <div className=""></div>
            <div className=" ml-32 md:ml-96 pl-28">
              <div className="max-w-md ">
                <h1 className="mb-2 text-xl md:text-5xl font-bold  text-gray-800 ">
                  Autumn Collection
                </h1>
                <p className="mb-5  text-sm md:text-md text-gray-800">
                  Discover the Autumn Collection fashion trends.comes in a wide
                  range of sizes to accommodate children of different ages and
                  growth stages. Proper fit is essential to ensure comfort and
                  ease of movement.
                </p>
                <button className="btn text-xl bg-amber-400 text-white border-none">
                  60%OFF
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slider 2 */}
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: "url(https://i.imgur.com/XNJUUC6.jpg)" }}
          >
            <div className=""></div>
            <div className=" mr-0 md:mr-96  md:pr-32">
              <div className="max-w-md ">
                <h1 className="mb-5 text-2xl md:text-5xl font-bold  mt-16 md:mt-0 text-gray-800">
                  Fashionable Collection
                </h1>
                <p className="mb-5  text-sm md:text-md text-gray-700">
                  Discover the Collection fashion trends.comes in a wide range
                  of sizes to accommodate children of different ages and growth
                  stages. Proper fit is essential to ensure comfort and ease of
                  movement.
                </p>
                <button className="btn text-xl bg-amber-400 text-white border-none">
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
            style={{ backgroundImage: "url(https://i.imgur.com/32cYZ2V.jpg)" }}
          >
            <div className=""></div>
            <div className=" ml-48 md:ml-96 md:pl-32">
              <div className="max-w-md ">
                <h1 className="mb-2 text-xl md:text-5xl font-bold  ">
                  Latest Collection
                </h1>
                <p className="mb-5  text-sm md:text-md ">
                  Discover the latest Collection fashion trends.comes in a wide
                  range of sizes to accommodate children of different ages and
                  growth stages. Proper fit is essential to ensure comfort and
                  ease of movement.
                </p>
                <button className="btn text-xl bg-amber-500 text-white border-none">
                  40%OFF
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
      <div className={HM.length !== 0 && "block"}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {HM.map((product) => (
            <HMCard key={product._id} product={product}></HMCard>
          ))}
        </div>
      </div>
      <div className={HM.length== 0 ? 'block' : 'hidden'}>
      <p className="text-3xl text-center  pb-8">  There is No data found</p>
      </div>
    </div>
  );
};

export default HM;
