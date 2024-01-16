import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";
import ProductModal from "./ProductModal";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Disable scroll when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset'; // Enable scroll when modal is closed
  };

  return (
    <div id="products" className="flex items-center justify-center flex-col px-4 pt-16 pb-5 bg-gray-100">
      <h2 className="text-4xl font-bold font-poppins text-center text-gray-800 mb-12">
        Products We Manufacture
      </h2>
      <Swiper
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 100,
          },
          620: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title} onClick={() => openModal(item)}>
            <div className="flex flex-col bg-white gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="inset-0 absolute bg-cover bg-center bg-white"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="absolute bottom-0 left-0 p-4 w-full bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-opacity duration-300">
                <h1 className="text-md font-poppins sm:text-sm">{item.title}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {isModalOpen && <ProductModal product={selectedProduct} onClose={closeModal} />}
      </Swiper>
    </div>
  );
};



export default Products;