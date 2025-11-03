import { Link } from "react-router-dom";
import cctvAudioImg from "./assets/images/night-vision-cctv-camera-with-720p-hd-wi-fi-security-original-imag5egrnqezymfn (1).webp";
import solarCctvImg from "./assets/images/Solar_Powered_CCTV.jpg";
import hikvisionImg from "./assets/images/61cCVSoBoQS._AC_UF350,350_QL80_ (1).jpg";
import wifiCctvImg from "./assets/images/Two way.png";

const cctvs = [
  {
    id: 1,
    title: "CCTV with Two-Way Audio",
    category: "CCTV",
    oldPrice: "$38",
    newPrice: "$26",
    image: cctvAudioImg,
  },
  {
    id: 2,
    title: "Solar-powered CCTV Cameras",
    category: "CCTV",
    oldPrice: "$30",
    newPrice: "$20",
    image: solarCctvImg,
  },
  {
    id: 3,
    title: "Hikvision DS-2CD2385FWD-I",
    category: "CCTV",
    oldPrice: "$32",
    newPrice: "$22",
    image: hikvisionImg,
  },
  {
    id: 4,
    title: "Wireless & Wi-Fi Enabled Cameras",
    category: "CCTV",
    oldPrice: "$32",
    newPrice: "$22",
    image: wifiCctvImg,
  },
];

const Cctv = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="text-center mb-10 px-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
          "Let your privacy be our own priority."
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cctvs.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="overflow-hidden rounded-t-lg">
                <Link to={`/productdetails/${product.id}?type=cctv`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <span className="text-sm text-red-600">
                    <em className="line-through text-gray-400 mr-1">{product.oldPrice}</em>
                    {product.newPrice}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.title}
                </h4>
                <Link
                  to={`/productdetails/${product.id}?type=cctv`}
                  className="inline-block text-blue-600 hover:text-blue-800 transition"
                >
                  <i className="fa fa-shopping-bag text-xl"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cctv;
export { cctvs };
