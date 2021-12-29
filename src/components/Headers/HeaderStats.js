import React from "react";
import axios from "axios";
import { useQueries } from "react-query";
// components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import Swiper core and required modules
import SwiperCore, { Navigation, Mousewheel, Pagination } from "swiper";

import Spinner from "../spinner/Spinner.js";
import bitcoin from "../../assets/img/bitcoin.png";
import ether from "../../assets/img/ethereum.png";
import xrp from "../../assets/img/xrp.png";
import lite from "../../assets/img/litecoin.png";
import CardStats from "../Cards/CardStats.js";

SwiperCore.use([Navigation, Mousewheel, Pagination]);
export default function HeaderStats() {
  const imgIndex = [bitcoin, ether, lite, xrp];
  const results = useQueries([
    { queryKey: ["post", 1], queryFn: () => fetchPost("BTC/NGN") },
    { queryKey: ["post", 2], queryFn: () => fetchPost("ETH/NGN") },
    { queryKey: ["post", 3], queryFn: () => fetchPost("LTC/NGN") },
    { queryKey: ["post", 4], queryFn: () => fetchPost("XRP/NGN") },
  ]);
  

  async function fetchPost(currency) {
    const request = await axios.get(`/.netlify/functions/audio?currency=${currency}`)
    return request
  }

  const splice = (num) => {
    let spliceNums;
    if (num.indexOf(".") !== -1) {
      spliceNums = num.substring(
        num.indexOf("."),
        num.indexOf(".") - (num.length - 1)
      );
    }
    return spliceNums.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const rounded = (num) => {
    return num.toFixed(2);
  };

  return (
    <>
      {/* Header */}
      <div className="relative bg-blue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              mousewheel={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                499: {
                  slidesPerView: 2,
                  spaceBetween: 10
                },
                910: {
                  slidesPerView: 3,
                  spaceBetween: 10
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 10
                },

              }}
              Pagination={true}
              className="mySwiper"
            >
              {results.map((result, i) => (
                <SwiperSlide>
                  <div
                    className={`px-4 ${
                      result.isLoading && "flex items-center justify-center"
                    }`}
                    key={i}
                  >
                    {result.isLoading ? (
                      <div className="w-20 flex items-center justify-center">
                        <Spinner />
                      </div>
                    ) : result.isError ? (
                      <div>error</div>
                    ) : (
                      <CardStats
                        statSubtitle={result.data.data.meta.currency_base}
                        statTitle={splice(result.data.data.values[0].close)}
                        statArrow={
                          result.data.data.values[0].close >
                          result.data.data.values[1].close
                            ? "up"
                            : "down"
                        }
                        statPercent={`${rounded(
                          ((result.data.data.values[0].close -
                            result.data.data.values[1].close) /
                            result.data.data.values[1].close) *
                            100
                        )}`}
                        statPercentColor={
                          result.data.data.values[0].close >
                          result.data.data.values[1].close
                            ? "text-emerald-500"
                            : "text-red-500"
                        }
                        statDescripiron="Since yesterday"
                        statIconName={imgIndex[i]}
                        statIconColor="bg-white"
                      />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
