import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";

export default function AboutPage() {
  return (
    <div>
      <div className="our-mission ">
        <h1 className="text-start text-xl font-bold pb-5"> Our Mission </h1>
        <p className="text-start">
          We believe in the 2nd Amendment. We believe every person deserves to
          be able to protect their loved ones, enjoy the sport of firearms, and
          make a decision that they will be forces of good in this world. With
          that in mind, we have accepted the heavy responsibility of being a
          place where people can come and buy firearms and ammunition and
          receive education on how to safely use and handle these tools. God
          Bless America.
        </p>
      </div>
      <Divider className="my-7" />

      <div className="our-vision">
        <h1 className="text-start text-xl font-bold pb-5"> Our Vision </h1>
        <p className="text-start">
          Our vision came from our founder. Abe believed in offering competitive
          pricing, quality gunsmithing/repair services, and educating people at
          any experience level. Abe was insistent that the customer comes first,
          not our pocket books, so treat the customer well and they will
          remember you. If you know Abe, you know he&apos;s a no hassle, no
          frills, solid guy, who is always willing to help. It is our mission to
          carry on this legacy that Abe worked so hard to build and to make him
          proud as we move forward!
          <br />
          <br />
          Our vision was also influenced by those who are no longer with us. On
          January 2, 2024, in the early morning hours We were informed that we
          lost a close friend. Sergeant Danilo Castaneda, Jr. of the Los Angeles
          Sheriff&apos;s Department, Norwalk Station, was not only a close
          friend but he was a brother. He was the first one in our group that
          bought a rifle when we were in college and he was definitely a large
          influence in getting our group into firearms. He is survived by his
          wonderful wife and his loving parents. If you would like to learn more
          about our brother, please check out the following link:
          https://thecurrentreport.com/lasd-sergeant-danilo-castaneda-jr-an-unexpected-passing/
          This loss has been difficult and we can&apos;t deny that it
          hasn&apos;t influenced us in moving forward into the firearms business
          but we can&apos;t think of a better way of honoring our friend and our
          brother, by getting involved in one of his great passions. In Honor of
          his life, January will always be a month for Golden State Arms to
          celebrate him. Stay Tuned for Deals, especially for those in Law
          Enforcement both active and retired. We appreciate what your and our
          dearly missed friend&apos;s sacrifice for our communities!
        </p>
      </div>
      <Divider className="my-7" />
      <div className="our-values">
        <h1 className="text-start text-xl font-bold pb-5"> Our Values </h1>
        <p className="text-start">
          Our Founder created Golden State Arms on the idea that purchasing a
          firearm should not be a daunting task, but rather it should be made as
          easy and straightforward as possible with an emphasis on customer
          service. These ideals were passed onto us and we aim to pursue the
          same goals! We would be happy to assist in the selection or design of
          a firearm that fits your needs and desires.
        </p>
      </div>
    </div>
  );
}

// <h1 className={title()}>About</h1>
// <Card className="max-w-[400px]">
//   <CardHeader className="flex gap-3">
//     <div className="flex flex-col">
//       <p className="text-md">NextUI</p>
//       <p className="text-small text-default-500">nextui.org</p>
//     </div>
//   </CardHeader>
//   <Divider />
//   <CardBody>
//     <p>Make beautiful websites regardless of your design experience.</p>
//   </CardBody>
//   <Divider />
//   <CardFooter>
//     <Link
//       isExternal
//       showAnchorIcon
//       href="https://github.com/nextui-org/nextui"
//     >
//       Visit source code on GitHub.
//     </Link>
//   </CardFooter>
// </Card>
