import { useLoaderData } from "react-router-dom";
import NikeCard from "../NikeCard/NikeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import GucciCard from "../GucciCard/GucciCard";

const Gucci = () => {
  const allBrandProduct = useLoaderData();
  const Gucci = allBrandProduct.filter(
    (product) => product.brandName.toLowerCase() === "Gucci".toLowerCase()
  );
  console.log(allBrandProduct);
  console.log(Gucci);

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
            className="hero min-h-screen bg-cover"
            style={{ backgroundImage: "url(https://i.imgur.com/9PRhYdP.jpg)" }}
          >
            <div className=" ml-0  md:ml-96 md:pl-28">
              <div className="max-w-md ">
                <h1 className="mb-5 text-2xl md:text-5xl font-bold  mt-2 md:mt-0">Women Collection</h1>
                <p className="mb-5  text-sm md:text-md">
                Discover the Women Collection fashion trends.comes in a wide range of sizes to accommodate women of different ages and growth stages. Proper fit is essential to ensure comfort and ease of movement.
                </p>
                <button className="btn text-xl bg-amber-500 text-white">25%OFF</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slider 2 */}
        <SwiperSlide>
          <div
            className="hero min-h-screen "
            style={{
              backgroundImage:
                "url(https://i.imgur.com/iifPCWj.jpg)",
            }}
          >
            <div className=""></div>
            <div className="ml-52 md:ml-96 pl-0 lg:pl-72">
              <div className="max-w-md ">
                <h1 className="mb-5 text-2xl md:text-5xl font-bold">
                  New Arrival
                </h1>
                <p className="mb-5 text-sm md:text-md">
                  Discover the new arrival fashion trends. The choice of
                  materials and fabrics is crucial in dress collections.
                  Designers select fabrics that suit the season and occasion.
                </p>
                <button className="btn text-xl bg-pink-300 text-white">
                  15%OFF
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slider 3 */}
        <SwiperSlide>
          <div
            className="hero min-h-screen "
            style={{
              backgroundImage: "url(https://i.imgur.com/CLyJrYg.jpg)",
            }}
          >
            <div className="">
              <div className="max-w-md ml-24 lg:ml-0 md:ml-36">
                <h1 className="mb-5 text-2xl lg:text-5xl font-bold">
                  Latest Arrival
                </h1>
                <p className="mb-5 text-sm md:text-md">
                  Discover the hottest latest summer fashion trends. Designed to accommodate a growing belly, maternity dresses provide comfort and style for expectant mothers..
                </p>
                <button className="btn md:text-xl bg-amber-500 text-white">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Gucci.map((product) => (
          <GucciCard key={product._id} product={product}></GucciCard>
        ))}
      </div>
    </div>
  );
};

export default Gucci;
