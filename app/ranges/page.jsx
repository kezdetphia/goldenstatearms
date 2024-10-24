"use client";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Spacer } from "@nextui-org/spacer";

const ranges = [
  {
    name: "Burro Canyon Shooting Park",
    hours: "Mon - Sun 9am - 5pm",
    description:
      "Southern California&apos;s largest outdoor public shooting range and law enforcement training center.",
    mapLink: "https://maps.app.goo.gl/QSypsK1NA2ofE2X39",
  },
  {
    name: "Angeles Shooting Range",
    hours: "Mon - Sun 9am - 5pm",
    description:
      "Stalwart outdoor gun range for rifles, pistols & shotguns, with 600-yard targets & classes.",
    mapLink: "https://maps.app.goo.gl/tNHmEszUoRRwLAKq8",
  },
  {
    name: "Moore N&apos; Moore",
    hours: "Tues, Thurs - Sun 10am - 5pm",
    description:
      "Sporting Clays is the ultimate shotgun sport for those who want to test their skills.",
    mapLink: "https://maps.app.goo.gl/2jmvsDHVD8GsGpM38",
  },
  {
    name: "Mike Raahauge Shooting Enterprises",
    hours: "Mon - Tues 8am - 2pm, Wed - Sun 8am - 5pm",
    description:
      "Keeping the American Heritage Alive. We have been throwing targets for a long time...",
    mapLink: "https://maps.app.goo.gl/jdngiPg1F1boBHUv9",
  },
  {
    name: "Route 66 Shooting Park",
    hours: "Mon - Sun 8am - 5pm",
    description:
      "Route 66 Shooting Sports Park sits on nearly 90 acres with multiple shooting ranges.",
    mapLink: "https://maps.app.goo.gl/5c495sJGTxg3k4m69",
  },
  {
    name: "LA Clays Shooting Park",
    hours: "Tues - Sun 10am - 4pm",
    description: "Southern California&apos;s premier shooting range.",
    mapLink: "https://maps.app.goo.gl/QsFw4s5NPWfbWVUs6",
  },
  {
    name: "Oaktree Gun Club",
    hours: "Wed - Sun 10am - 6pm",
    description:
      "A state-of-the-art facility offering Shotgun, Rifle, and Pistol shooting.",
    mapLink: "https://maps.app.goo.gl/GXmRLGUmBEHxN3598",
  },
  {
    name: "La Puente Firing Range",
    hours: "Mon - Sun 11am - 5pm",
    description:
      "15,000 Sq. ft. indoor shooting range with 24 individual booths.",
    mapLink: "https://maps.app.goo.gl/mAsqVtDymPcp4sKVA",
  },
  {
    name: "Prado Olympic Shooting Park",
    hours: "Tues - Sun 8am - 5pm",
    description:
      "Home of the 1984 Olympic Shooting Events, Prado offers world-class shooting facilities.",
    mapLink: "https://maps.app.goo.gl/MySHEpi7KLXZDVG39",
  },
];

const Gallery = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 ">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Local Ranges around Azusa, CA
        </h1>
        <p className="text-lg mb-6">Go have fun and enjoy that Pew Pew Life!</p>
        <p className="text-lg">
          Please familiarize yourself with each venue&apos;s rules and
          regulations before you plan your trip.
        </p>
      </div>

      {/* Responsive Cards Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {ranges.map((range, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 h-full">
            <Card
              className="h-full flex flex-col w-full"
              isHoverable
              isPressable
            >
              <CardHeader>
                <h3 className="text-xl font-semibold">{range.name}</h3>
              </CardHeader>
              <CardBody className="flex-grow">
                <p className="text-md">{range.hours}</p>
                <Spacer y={0.5} />
                <p>{range.description}</p>
              </CardBody>
              <CardFooter>
                <Link
                  href={range.mapLink}
                  color="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MAP
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
