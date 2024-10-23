"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

import one from "../../public/1.jpg";
import two from "../../public/2.jpg";
import three from "../../public/3.jpg";

// Import without SSR
const Slider = dynamic(() => import("react-slick"), { ssr: false });

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="container mx-auto px-4 py-8 overflow-hidden">
      <h2 className="text-center text-2xl font-bold mb-6">Gallery</h2>
      <Slider {...settings} className="w-full">
        <div className="p-2">
          <div className="w-full h-auto">
            <Image
              src={one}
              alt="Product 1"
              className="rounded-lg"
              layout="responsive"
              width={800}
              height={450}
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            />
          </div>
        </div>
        <div className="p-2">
          <div className="w-full h-auto">
            <Image
              src={two}
              alt="Product 2"
              className="rounded-lg"
              layout="responsive"
              width={800}
              height={450}
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            />
          </div>
        </div>
        <div className="p-2">
          <div className="w-full h-auto">
            <Image
              src={three}
              alt="Product 3"
              className="rounded-lg"
              layout="responsive"
              width={800}
              height={450}
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Gallery;
