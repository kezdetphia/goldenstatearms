"use client";
import { Button } from "@nextui-org/button";
import Carousel from "../../components/carousel";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";

const Gallery = () => {
  return (
    <div className="container mx-auto  ">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-8">Our Gallery</h1>
        <p className="text-lg mb-8 ">
          Explore our exclusive collection of firearms, ammunition, and
          accessories. Each product is carefully curated to ensure quality and
          satisfaction.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="mb-20">
        <Carousel />
      </div>

      {/* Categories or Highlights Section */}
      <div className="text-center my-12 ">
        <h2 className="text-2xl font-semibold mt-10 mb-8">
          Explore by Category
        </h2>
        <div className="flex  sm:gap-8 w-full justify-between sm:justify-center text-center ">
          <Link
            href="/gallery/firearms"
            className="sm:px-6 sm:py-4  px-2 py-2  bg-primary rounded-lg
          hover:bg-primary-dark transition"
          >
            Firearms
          </Link>
          <Link
            href="/gallery/ammunition"
            className="sm:px-6 sm:py-4  px-2 py-2  bg-primary rounded-lg
          hover:bg-primary-dark transition"
          >
            {" "}
            Ammunition
          </Link>
          <Link
            href="/gallery/accessories"
            className="sm:px-6 sm:py-4  px-2 py-2  bg-primary rounded-lg
          hover:bg-primary-dark transition"
          >
            {" "}
            Accessories
          </Link>
        </div>
      </div>
      {/* <Divider className="my-4" /> */}
      {/* Call to Action Section */}
      <div className="text-center  p-8  rounded-lg   ">
        <h3 className="text-3xl font-semibold my-4 ">Visit Us Today</h3>
        <p className="text-lg  my-10 ">
          Want to see more? Visit our store for an in-person experience or
          contact us for personalized support!
        </p>
        <Link
          href="/contact"
          className="sm:px-6 sm:py-4  px-2 py-2  bg-primary rounded-lg
          hover:bg-primary-dark transition"
        >
          {" "}
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
