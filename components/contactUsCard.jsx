import { Card, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

export default function ContactUsCard() {
  return (
    <div className="w-screen mt-5 text-xs   ">
      <Card>
        <CardBody>
          <div className="flex flex-col sm:flex-row sm:justify-evenly items-center sm:py-5">
            <div className="flex flex-col text-center  ">
              <p>Monday - Friday 10am - 5pm</p>
              <p>Saturday-Sunday - By Appointment Only</p>
            </div>
            <Divider className="my-2  sm:my-0" orientation="vertical" />
            <div className="flex flex-col  sm:mb-0">
              <p>Phone: (626) 872-GUNS (4867)</p>
              <p>Email: info@goldenstatearms.com</p>
            </div>
            <Divider className="my-2 sm:mx-2 sm:my-0" orientation="vertical" />
            <div className="flex flex-col  sm:mb-0">
              <p>788 E Alosta Avenue</p>
              <p>Azusa, CA 91702</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
