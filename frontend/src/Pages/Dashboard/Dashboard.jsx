import React, { useEffect, useState } from "react";
// import Logo from "./icon.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Layout from "../../Layout/Index";
import Card from "../../Components/Card.js";
import { useDispatch, useSelector } from "react-redux";
import { bannerListAction } from "../../Redux/actions/bannerAction.js";

const DashBoard = () => {
  const dispatch = useDispatch();
  const bannerData = useSelector((state) => state?.bannerReducer?.list?.result);

  console.log("dataa", bannerData);

  useEffect(() => {
    dispatch(bannerListAction());
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="my-2">
        <div className="p-2 w-full">
          {bannerData && bannerData.length > 0 ? (
            <Carousel
              autoPlaySpeed={3000}
              ssr={false}
              arrows={false}
              autoPlay={true}
              showDots={true}
              infinite={true}
              responsive={responsive}
              className=" mx-4 hover:bg-white hover:text-center "
            >
              {bannerData?.map((item, index) => (
                <>
                  <div className="">
                    <img
                      src={item?.link}
                      alt="image 2"
                      className="rounded-md mx-auto h-[26rem] object-center object-cover w-full"
                    />
                  </div>
                </>
              ))}
            </Carousel>
          ) : (
            []
          )}
        </div>
        <section className="card">
          <Card />
        </section>
      </div>
    </>
  );
};

// const WrappedDashboard = Layout(DashBoard);

export default Layout(DashBoard);
