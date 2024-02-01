import React from "react";
import { Button } from "./Button";
import Layout from "../Layout/Index";

const Card = () => {
  return (
    <React.Fragment>
      <main className="mx-8">
        <div class="m-4  grid grid-cols-1 md:grid-cols-2  place-content-center place-items-center">
          <div class="p-4 md:order-1 order-2">
            <h2 class="text-2xl font-bold mb-4">SOJANYA</h2>
            <p class="text-gray-700">
              Experience timeless elegance with our sophisticated blue kurta for
              men. This traditional Indian garment seamlessly blends classic
              style with modern comfort. Crafted from high-quality fabric, the
              kurta features a rich shade of blue, adding a touch of refinement
              to your wardrobe.
            </p>
          </div>

          <div className="md:order-2 order-1 md:h-4/6">
            <img
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18110768/2023/8/9/75cbca42-1cb2-41d0-abf1-524857b70f241691578762497SOJANYAMenNavyBlueWhiteEthnicMotifsPrintedCottonLinenKurta1.jpg"
              alt="Dummy Image"
              class="w-full h-full object-contain rounded-md"
            />
          </div>
        </div>

        <section className="mb-20">
          <div class=" flex justify-center items-center">
            {/* <!-- Middle Column - Rotated Image --> */}
            <div class="w-1/3 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1604702770018-55669959b124?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
                alt="Rotated Image"
                class="transform overflow-hidden animate-pulse rotate-12 w-2/3 h-auto"
              />
            </div>
            <div class="w-1/3  grid place-content-center  text-center">
              <h2 class="text-3xl font-bold ">About us</h2>
              <h1 class="text-4xl my-5">
                Creating Style while Redefining comfort
              </h1>
              <p>
                we weave more than just fabric; we craft a narrative or redifine
                comfort for the modern man
              </p>
              <div className="mx-auto">
                <Button
                  name="Explore Now "
                  className="my-2 hover:underline  w-40 "
                />
              </div>
            </div>

            {/* <!-- Right Column - Rotated Image --> */}
            <div class="w-1/3 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
                alt="Rotated Image"
                class="transform -rotate-12 animate-pulse w-2/3 h-auto"
              />
            </div>
          </div>
        </section>

        <div className="mt-16">
          <h1 className="font-serif font-bold text-4xl">
            Most Popular Fabrics{" "}
          </h1>
        </div>
        <section className="grid grid-cols-3 gap-6 place-content-center place-items-center px-2 py-8">
          <img
            className="border-[1px] border-gray-600"
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19818628/2022/9/6/ec27eee6-d613-4423-8e0f-007aea1603c31662468109188Shirts1.jpg"
          ></img>
          <img
            className="border-[1px] border-gray-600"
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2284633/2018/2/19/11519031607868-Roadster-Men-Shirts-5971519031607655-1.jpg"
          ></img>
          <img
            className="border-[1px] border-gray-600"
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1862801/2018/2/9/11518155061506-Roadster-Men-Maroon--Navy-Blue-Regular-Fit-Checked-Casual-Shirt-8861518155061131-1.jpg"
          ></img>
          <img
            className="border-[1px] border-gray-600"
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2478210/2019/11/8/85bba7bd-b3f3-4ea3-a063-5890340301471573214255868-WROGN-Men-Pink-Slim-Fit-Solid-Casual-Shirt-7431573214250598-1.jpg"
          ></img>
          <img
            className="border-[1px] border-gray-600"
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1207931/2020/5/22/319a261b-4842-4a9b-8d61-eae96b41384c1590137415305-ether-Men-Navy-Blue-Regular-Fit-Anti-Microbial-Cotton-Linen--1.jpg"
          ></img>
          <img
            className="border-[1px] border-gray-600"
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2019/9/16/6534e3a3-9062-42e6-ae42-f8211c27be8c1568617812357-1.jpg"
          ></img>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Card;
