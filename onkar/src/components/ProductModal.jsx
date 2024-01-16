import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { close} from '../assets'

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-lg w-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-poppins font-bold">{product.title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
          <img src={close} className="w-[28px] h-[28px] object-contain"/>
          </button>
        </div>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="max-w-full w-90 h-full"
        >
          {product.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index}`} className="w-full h-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductModal;
