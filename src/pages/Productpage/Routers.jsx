import { Link } from "react-router-dom";
import asusRouterImg from "./assets/images/asus rooter.2.svg";
import netgearRouterImg from "./assets/images/Netgear Nighthawk RAX80.2.svg";
import linksysRouterImg from "./assets/images/Linksys EA9500 .1.svg";
import tplinkRouterImg from "./assets/images/TP-Link Archer AX6000 .1.svg";

// Router Data
const routers = [
  {
    id: 1,
    name: "Asus RT-AX88U",
    oldPrice: "$28",
    newPrice: "$20",
    image: asusRouterImg,
  },
  {
    id: 2,
    name: "Netgear Nighthawk RAX80",
    oldPrice: "$26",
    newPrice: "$18",
    image: netgearRouterImg,
  },
  {
    id: 3,
    name: "Linksys EA9500",
    oldPrice: "$32",
    newPrice: "$24",
    image: linksysRouterImg,
  },
  {
    id: 4,
    name: "TP-Link Archer AX6000",
    oldPrice: "$45",
    newPrice: "$30",
    image: tplinkRouterImg,
  },
];

const Routers = () => {
  return (
    <section className="bg-white py-16">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Each communication begins with just one signal.
        </h3>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {routers.map((router) => (
          <div
            key={router.id}
            className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <div className="overflow-hidden rounded-t-lg">
              {/* Use consistent link to ProductDetails */}
              <Link to={`/productdetails/${router.id}?type=router`}>
                <img
                  src={router.image}
                  alt={router.name}
                  className="w-full h-48 object-contain p-4 transition-transform duration-300 hover:scale-110"
                />
              </Link>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">Networking</span>
                <span className="text-sm text-red-600">
                  <em className="line-through text-gray-400 mr-1">
                    {router.oldPrice}
                  </em>
                  {router.newPrice}
                </span>
              </div>

              <h4 className="text-md font-semibold text-gray-800 mb-2">
                {router.name}
              </h4>

              <Link
                to={`/productdetails/${router.id}?type=router`}
                className="inline-block text-blue-600 hover:text-blue-800 transition"
              >
                <i className="fa fa-shopping-bag text-lg"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Routers;
export { routers };
