"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import one from "../public/1.jpg";
import two from "../public/2.jpg";
import three from "../public/3.jpg";
import { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Carousel = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (src) => {
    setEnlargedImage(enlargedImage === src ? null : src);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full"
      >
        <SwiperSlide>
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => handleImageClick(one)}
          >
            <Image
              src={one}
              alt="Product 1"
              className="rounded-lg"
              width={400} // Set consistent width
              height={300} // Set consistent height
              layout="intrinsic"
              objectFit="cover" // Maintain aspect ratio
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => handleImageClick(two)}
          >
            <Image
              src={two}
              alt="Product 2"
              className="rounded-lg"
              width={400} // Set consistent width
              height={300} // Set consistent height
              layout="intrinsic"
              objectFit="cover" // Maintain aspect ratio
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => handleImageClick(three)}
          >
            <Image
              src={three}
              alt="Product 3"
              className="rounded-lg"
              width={400} // Set consistent width
              height={300} // Set consistent height
              layout="intrinsic"
              objectFit="cover" // Maintain aspect ratio
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => handleImageClick(two)}
          >
            <Image
              src={two}
              alt="Product 2"
              className="rounded-lg"
              width={400} // Set consistent width
              height={300} // Set consistent height
              layout="intrinsic"
              objectFit="cover" // Maintain aspect ratio
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            />
          </div>
        </SwiperSlide>

        {/* Add more slides as needed */}
      </Swiper>

      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setEnlargedImage(null)}
        >
          <div className="relative w-full h-full max-w-4xl max-h-screen">
            <Image
              src={enlargedImage}
              alt="Enlarged Image"
              className="rounded-lg cursor-pointer"
              layout="fill"
              objectFit="contain" // Ensure image fits without distortion
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
