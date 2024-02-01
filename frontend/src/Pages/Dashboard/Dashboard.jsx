import React from "react";
// import Logo from "./icon.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Layout from "../../Layout/Index";

const Data = [
  {
    image:
      "https://cdn-media.powerlook.in/catalog/product/cache/a355f488ce208bb58a90660f35cdc6e0/5/0/504-955430-3.jpg",
  },
  {
    image:
      "https://cdn-media.powerlook.in/catalog/product/cache/a355f488ce208bb58a90660f35cdc6e0/d/p/dp02-979621-1.jpg",
  },
  {
    image:
      "https://cdn-media.powerlook.in/catalog/product/cache/a355f488ce208bb58a90660f35cdc6e0/d/p/dp02-989521-3.jpg",
  },
  {
    image:
      "https://cdn-media.powerlook.in/catalog/product/cache/a355f488ce208bb58a90660f35cdc6e0/5/0/503-953350.jpg",
  },
];
const DashBoard = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
        <div  className="p-2">
          <Carousel
            autoPlaySpeed={3000}
            arrows={false}
            autoPlay={true}
            showDots={true}
            infinite={true}
            responsive={responsive}
            className=" mx-4 hover:bg-white hover:text-center "
          >
            {Data.map((item , index) => {
              return (
                <>
                <div >
                
                  <img
                    src={item.image}
                    alt="image 2"
                    className="rounded-md w-11/12"
                  />          
                </div>
                </>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

// const WrappedDashboard = Layout(DashBoard);


export default Layout(DashBoard);
