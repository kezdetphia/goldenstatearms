"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
// import { Image } from "@nextui-org/image";

import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

import map from "@/public/map.png";
import Image from "next/image";
import { Input, Textarea } from "@nextui-org/input";
import emailjs from "emailjs-com";
import { useState } from "react";
import { Button } from "@nextui-org/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v9q9spf", // Replace with your EmailJS service ID
        "template_tno0efd", // Replace with your EmailJS template ID
        e.target, // This grabs the form data
        "-timrCBD-0YqBuVaU" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 ">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-8">Get in Touch With Us!</h1>
          <p className="text-lg mb-6">
            Whether you're ready to gear up or need some advice, don't hesitate
            to reach out. Let's chat and make your next visit a blast!
          </p>
          <p className="text-lg">
            Need directions? Check out the map for our exact location. We’re
            looking forward to hearing from you!
          </p>
        </div>
      </div>
      <div className="sm:flex w-screen px-5 sm:justify-around sm:space-x-5 space-y-5  sm:space-y-0 ">
        <div className="sm:w-3/5 w-full flex flex-grow  ">
          <div className=" w-full">
            <Card className="py-1 h-full">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-md">Send us an Email</p>
                <Divider className="my-3" />
              </CardHeader>
              <CardBody className="flex flex-col h-full justify-between">
                <form
                  onSubmit={sendEmail}
                  className="flex flex-col space-y-2 h-full"
                >
                  <Input
                    className=""
                    type="text"
                    name="name"
                    variant="bordered"
                    label="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    variant="bordered"
                    label="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Textarea
                    name="message"
                    label="Message"
                    variant="bordered"
                    placeholder="Your Message"
                    onChange={handleChange}
                    value={formData.message}
                    required
                    disableAnimation
                    disableAutosize
                    classNames={{
                      base: "max-w-full",
                      input: "resize-y sm:min-h-[150px]",
                    }}
                  />
                  {/* <Button type="submit" color="primary">
                  Send Email
                  </Button> */}
                </form>
              </CardBody>
              <CardFooter className=" ">
                <Button type="submit" color="primary" className="w-full">
                  Send Email
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* /////// Contact Us and Find Us */}
        <div className="sm:flex sm:flex-col sm:w-2/5 w-full space-y-5">
          {/* /////// Contact Us */}
          <div className="flex-grow mb-5 sm:mb-0 ">
            <Card className="py-1 h-full">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-md">Contact Us</p>
                <Divider className="my-3" />
              </CardHeader>
              <CardBody>
                <div className="flex items-center space-x-2">
                  <MdOutlinePhoneAndroid className="mr-2" />
                  <a href="tel:16268724867" className="text-decoration-none">
                    +1 (626) 872 4867
                  </a>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <MdOutlineEmail className="mr-2" />
                  <a
                    href="mailto:info@goldenstatearms.com"
                    className="text-decoration-none"
                  >
                    info@goldenstatearms.com
                  </a>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* /////// Find Us (Map) */}
          <a
            href="https://www.google.com/maps/place/Golden+State+Arms/@34.1299918,-117.8957964,17z/data=!4m6!3m5!1s0x80c327c6c0c4b5f5:0x63ce261fb59278ee!8m2!3d34.1301739!4d-117.8944446!16s%2Fg%2F11c6ddj2dy?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:w-full"
          >
            <div className="flex-grow">
              <Card className="py-1 h-full">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-md">Find Us</p>
                  <Divider className="my-3" />
                  <p className="text-tiny uppercase font-bold pb-2">
                    Golden State Arms
                  </p>
                  <h4 className="font-bold text-large">
                    788 E Alosta Ave Azusa
                  </h4>
                  <small className="text-default-500">CA 91702</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl w-full"
                    src={map}
                  />
                </CardBody>
              </Card>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
