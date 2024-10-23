"use client";
import { Link } from "@nextui-org/link";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Snippet } from "@nextui-org/snippet";
import { Button } from "@nextui-org/button";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { MdPhone, MdLocationOn, MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-12 l">
      {/* Header */}
      <div className="text-center">
        <h1 className={title()}>Golden State Arms</h1>
        <p className={subtitle({ class: "mt-4" })}>
          Your Trusted Firearms and Ammunition Source in Azusa, CA
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-bold">Firearms & Ammunition</h3>
          </CardHeader>
          <CardBody>
            <p>
              We offer a wide range of high-quality firearms and ammunition.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-lg font-bold">Expert Gunsmithing</h3>
          </CardHeader>
          <CardBody>
            <p>
              Our skilled gunsmiths ensure your firearms are in top condition.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-lg font-bold">Firearm Education</h3>
          </CardHeader>
          <CardBody>
            <p>We offer training for all levels to promote safe firearm use.</p>
          </CardBody>
        </Card>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-4xl text-center">
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
      {/* Call to Action - Contact & Location */}
      <div className="w-full sm:w-auto max-w-md mx-auto flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
        {/* Call Us Button */}
        <a href="tel:+16268724867" className="w-full sm:w-auto">
          <Button as="div" className="w-full sm:w-auto" color="primary">
            <MdPhone className="mr-2" /> Call Us: (626) 872-4867
          </Button>
        </a>

        {/* Location Button */}
        <a
          href="https://maps.app.goo.gl/hn1HGi19wmEE3BZk8"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <Button as="div" className="w-full sm:w-auto" color="primary">
            <MdLocationOn className="mr-2" /> 788 E Alosta Ave, Azusa, CA
          </Button>
        </a>

        {/* Email Button */}
        <a href="mailto:info@goldenstatearms.com" className="w-full sm:w-auto">
          <Button as="div" className="w-full sm:w-auto" color="primary">
            <MdEmail className="mr-2" /> Email: info@goldenstatearms.com
          </Button>
        </a>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-12">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          Visit us to explore our inventory of firearms and accessories, or
          check out our
          <Link href="/gallery" className="text-primary ml-1">
            Gallery
          </Link>
        </Snippet>
      </div>
    </section>
  );
}
