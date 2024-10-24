"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

const usedItems = [
  {
    name: "Sylvan Arms AR-15 Folding Stock Adapter",
    img: "https://sylvanarms.com/wp-content/uploads/2024/05/331.jpg",
  },
  {
    name: "Killer Innovations Sig P320 Base Pads",
    img: "https://killer-innovations.com/wp-content/uploads/2020/03/SIG-P320-BASEPAD-GRAY.jpg",
    // img: "https://via.placeholder.com/270?text=Killer+Innovations+Sig+P320",
  },
  {
    name: "Cain Arms Pistol Brace",
    img: "https://www.cainarms.com/wp-content/uploads/2021/08/Milspec-Brace-Non-Adjustable-Black.jpg", // Add or use placeholder
  },
  {
    name: "OLight PL-Mini 2",
    img: "https://cdn.olightstore.com/image/pl-mini-2-09-eec4pn.jpg@600w_600h_90q.webp", // Add or use placeholder
  },
  {
    name: "GG&G 45-deg offset mount",
    img: "https://i.ebayimg.com/images/g/gCQAAOSwSzZdNAvH/s-l640.jpg", // Add or use placeholder
  },
  {
    name: "Scalarworks LEAP/RMR 1/3 co-witness Mount",
    img: "https://www.tacticallink.com/assets/images/productimages/scalarworks/sw0400/1.jpg", // Add or use placeholder
  },
  {
    name: "Armory Craft Magwell for Sig P320 X-Carry Grip",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVdOIXBQI_ZmhyAThqoqWFjO4HcNXYHA_6A&s", // Add or use placeholder
  },
  {
    name: "Spec Ops Tech Mag Dump Pouch",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQOnZF5wmmRlaSRcOKm1HLa4x8A2w2B39wQ&s", // Add or use placeholder
  },
  {
    name: "Fakefire M600 sorta with remote switch",
    img: "https://cdn.shoplightspeed.com/shops/625090/files/25710378/1200x1000x2/image.jpg", // Add or use placeholder
  },
  {
    name: "Magpul Bad Lever",
    img: "https://media.mwstatic.com/product-images/src/Primary/769/769721.jpg", // Add or use placeholder
  },
  {
    name: "Magpul AFG",
    img: "https://magpul.com/media/catalog/product/cache/ec95e45c18f9ea74c3e5ae88faf4ee5c/m/a/mag414_blk_1.png", // Add or use placeholder
  },
  {
    name: "Vertx mph Sub",
    img: "https://cdn11.bigcommerce.com/s-9j9zreeu/images/stencil/1280x1280/products/61426/186793/Untitled_-_2019-11-19T143829.462__98711.1574203119.jpg?c=2", // Add or use placeholder
  },
];

const UsedItems = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 ">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-8">Used Items For Sale</h1>
        <p className="text-lg mb-6">
          Looking for great deals on used firearms and accessories? You’ve come
          to the right place!
        </p>
        <p className="text-lg">
          Explore our current selection of pre-owned items. These are first
          come, first served—so don’t miss out!
        </p>
      </div>

      {/* Used Items Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:pt-8">
        {usedItems.map((item, index) => (
          <div key={index} className="h-full">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <h3 className="text-xl font-semibold text-start">
                  {item.name}
                </h3>
              </CardHeader>
              <CardBody className="overflow-visible py-2 items-center">
                <Image
                  alt="Item Image"
                  className="object-cover rounded-xl "
                  src={item.img}
                  // src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={350}
                  height={320}
                />
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsedItems;
