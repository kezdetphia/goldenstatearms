"use client";
import { Link } from "@nextui-org/link";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Snippet } from "@nextui-org/snippet";
import { Button } from "@nextui-org/button";
import { MdPhone, MdLocationOn, MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-12 w-full">
      {/* Header */}
      <div className="text-center w-full max-w-4xl mx-auto">
        <h1 className={title()}>Golden State Arms</h1>
        <p className={subtitle({ class: "mt-4" })}>
          Your Trusted Firearms and Ammunition Source in Azusa, CA
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto ">
        <Card>
          <CardHeader className="w-full  text-center sm:text-start">
            <h3 className="text-lg font-bold w-full  ">
              Firearms & Ammunition
            </h3>
          </CardHeader>
          <CardBody>
            <p className="text-center sm:text-start">
              We offer a wide range of high-quality firearms and ammunition.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="w-full  text-center sm:text-start">
            <h3 className="text-lg font-bold w-full  ">Expert Gunsmithing</h3>
          </CardHeader>
          <CardBody>
            <p className="text-center sm:text-start">
              Our skilled gunsmiths ensure your firearms are in top condition.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="w-full  text-center sm:text-start">
            <h3 className="text-lg font-bold w-full  ">Firearm Education</h3>
          </CardHeader>
          <CardBody>
            <p className="text-center sm:text-start">
              We offer training for all levels to promote safe firearm use.
            </p>
          </CardBody>
        </Card>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center w-full max-w-4xl mx-auto">
        <h2 className={title({ class: "mt-8" })}>
          Why Choose Golden State Arms
        </h2>
        <p className={subtitle({ class: "mt-4" })}>
          At Golden State Arms, we are committed to providing quality firearms,
          ammunition, and expert services at competitive prices. Our
          knowledgeable staff is always ready to assist with your needs.
        </p>
      </div>

      {/* Call to Action - Contact & Location */}
      {isClient && (
        <div className="w-full max-w-md mx-auto flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
          {/* Call Us Button */}
          <a className="w-full sm:w-auto" href="tel:+16268724867">
            <Button
              as="div"
              className="w-full sm:w-auto flex items-center text-left"
              color="primary"
            >
              <span className="flex-shrink-0" style={{ minWidth: "30px" }}>
                <MdPhone />
              </span>
              <span className="flex-grow text-center">
                Call Us: (626) 872-4867
              </span>
            </Button>
          </a>

          {/* Location Button */}
          <a
            className="w-full sm:w-auto"
            href="https://maps.app.goo.gl/hn1HGi19wmEE3BZk8"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button
              as="div"
              className="w-full sm:w-auto flex items-center text-left"
              color="primary"
            >
              <span className="flex-shrink-0" style={{ minWidth: "30px" }}>
                <MdLocationOn />
              </span>
              <span className="flex-grow text-center">
                788 E Alosta Ave, Azusa, CA
              </span>
            </Button>
          </a>

          {/* Email Button */}
          <a
            className="w-full sm:w-auto"
            href="mailto:info@goldenstatearms.com"
          >
            <Button
              as="div"
              className="w-full sm:w-auto flex items-center text-left"
              color="primary"
            >
              <span className="flex-shrink-0" style={{ minWidth: "30px" }}>
                <MdEmail />
              </span>
              <span className="flex-grow text-center">
                Email: info@goldenstatearms.com
              </span>
            </Button>
          </a>
        </div>
      )}

      {/* Footer Section */}
      {/* Footer Section */}
      <div className=" text-center mt-12  px-4 sm:px-0  whitespace-normal">
        {isClient && (
          // <Snippet hideCopyButton hideSymbol variant="bordered">
          <p>
            Visit us to explore our inventory of firearms and accessories, or
            check out our
            <Link className="text-primary ml-1" href="/gallery">
              Gallery
            </Link>
          </p>
          // </Snippet>
        )}
      </div>
    </section>
  );
}
