import { Link } from "react-router-dom";
import macbookImg from "./assets/images/image_7e33f7.webp";
import samsungImg from "./assets/images/003_family_galaxy_book3_pro_16_beige_graphite-2.jpg";
import asusImg from "./assets/images/d6cba9f9-0541-4c7c-b4f1-a12fc6a842dc.cb98580d407bd963c5ae5c0924d4949d.webp";
import dellImg from "./assets/images/il_fullxfull.3921368329_pypg (1).webp";

const laptops = [
  {
    id: 1,
    title: "Apple MacBook Air M3",
    category: "Laptop",
    oldPrice: "$36",
    newPrice: "$24",
    image: macbookImg,
    description: "Powerful and sleek Apple MacBook Air with M3 chip.",
  },
  {
    id: 2,
    title: "Samsung Galaxy Book4Edge",
    category: "Laptop",
    oldPrice: "$32",
    newPrice: "$22",
    image: samsungImg,
    description: "Ultra-thin, stylish laptop for everyday performance.",
  },
  {
    id: 3,
    title: "Asus Vivobook S 16 OLED",
    category: "Laptop",
    oldPrice: "$45",
    newPrice: "$30",
    image: asusImg,
    description: "Brilliant OLED display with powerful performance.",
  },
  {
    id: 4,
    title: "Dell XPS 13 (2023)",
    category: "Laptop",
    oldPrice: "$32",
    newPrice: "$22",
    image: dellImg,
    description: "Compact design with cutting-edge features.",
  },
];

const Laptop = () => {
  return (
    <section className="bg-white py-16">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Innovation starts at your fingers.
        </h3>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {laptops.map((product) => (
          <div
            key={product.id}
            className="bg-gray-50 rounded-lg shadow hover:shadow-md transition-transform duration-300 hover:scale-105"
          >
            <div className="overflow-hidden rounded-t-lg">
              {/* ✅ Added ?type=laptop for dynamic ProductDetails */}
              <Link to={`/productdetails/${product.id}?type=laptop`}>
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
                  <em className="line-through text-gray-400 mr-1">
                    {product.oldPrice}
                  </em>
                  {product.newPrice}
                </span>
              </div>
              <h4 className="text-md font-semibold text-gray-800 mb-2">
                {product.title}
              </h4>
              <Link
                to={`/productdetails/${product.id}?type=laptop`}
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

export default Laptop;
export { laptops };
