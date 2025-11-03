import { Link } from "react-router-dom";
import keyboardImg from "./assets/images/keyboard.3.svg";
import mouseImg from "./assets/images/mouse.svg";
import printerImg from "./assets/images/printer.1 (1).svg";
import scannerImg from "./assets/images/scanner.1.svg";
import pcFamilyImg from "./assets/images/PC family.png";

const accessories = [
  {
    id: 1,
    title: "Keyboards",
    image: keyboardImg,
    category: "accessory",
  },
  {
    id: 2,
    title: "Mouse",
    image: mouseImg,
    category: "accessory",
  },
  {
    id: 3,
    title: "Printer",
    image: printerImg,
    category: "accessory",
  },
  {
    id: 4,
    title: "Scanner",
    image: scannerImg,
    category: "accessory",
  },
  {
    id: 5,
    title: "PC Accessories",
    image: pcFamilyImg,
    category: "accessory",
  },
];

const Accessories = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white uppercase">
            All Accessories Sales and Services
          </h2>
        </div>

        {/* Grid of accessories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {accessories.map((item) => (
            <div
              key={item.id}
              className="text-center group hover:scale-105 transform transition duration-300"
            >
              <h4 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">
                {item.title}
              </h4>
              <div className="w-full h-40 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <Link to={`/productdetails/${item.id}?type=${item.category}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-32 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accessories;
export { accessories };
