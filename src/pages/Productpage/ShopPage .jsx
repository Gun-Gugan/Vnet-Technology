import { useState } from "react";
import { Link } from "react-router-dom";
import { laptops } from "./Laptop";
import { cctvs } from "./Cctv";
import { routers } from "./Routers";
import { accessories } from "./Accessories";

/* ---------- COMBINE ALL PRODUCTS ---------- */
export const allProducts = [
  ...laptops.map((item) => ({
    id: `laptop-${item.id}`,
    name: item.title,
    image: item.image,
    oldPrice: item.oldPrice,
    newPrice: item.newPrice,
    category: item.category.toLowerCase(),
    type: "laptop",
  })),
  ...cctvs.map((item) => ({
    id: `cctv-${item.id}`,
    name: item.title,
    image: item.image,
    oldPrice: item.oldPrice,
    newPrice: item.newPrice,
    category: item.category.toLowerCase(),
    type: "cctv",
  })),
  ...routers.map((item) => ({
    id: `router-${item.id}`,
    name: item.name,
    image: item.image,
    oldPrice: item.oldPrice,
    newPrice: item.newPrice,
    category: "router",
    type: "router",
  })),
  ...accessories.map((item) => ({
    id: `accessory-${item.id}`,
    name: item.title,
    image: item.image,
    oldPrice: item.oldPrice || null,
    newPrice: item.newPrice || null,
    category: item.category.toLowerCase(),
    type: "accessory",
  })),
];

const filters = ["All", "Laptop", "CCTV", "Router", "Accessory"];
const ITEMS_PER_PAGE = 4;

const ShopPage = () => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts =
    currentFilter === "All"
      ? allProducts
      : allProducts.filter(
          (p) => p.category === currentFilter.toLowerCase()
        );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageClick = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="py-12 bg-white mt-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800">Our Shop</h3>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => {
              setCurrentFilter(f);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              currentFilter === f
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-100"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-50 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-transform duration-300 hover:scale-102"
          >
            {/* The link below routes to the ProductDetails page */}
            <Link to={`/productdetails/${product.id}?type=${product.type}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain p-4 transition-transform"
              />
            </Link>

            <div className="p-4">
              <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                <span>
                  {product.category.charAt(0).toUpperCase() +
                    product.category.slice(1)}
                </span>

                {product.oldPrice && product.newPrice && (
                  <span>
                    <em className="line-through mr-1 text-gray-400">
                      {product.oldPrice}
                    </em>
                    <span className="text-red-500">{product.newPrice}</span>
                  </span>
                )}
              </div>

              <h4 className="text-md font-semibold mb-2 text-gray-800">
                {product.name}
              </h4>

              <Link
                to={`/productdetails/${product.id}?type=${product.type}`}
                className="inline-block text-blue-600 hover:text-blue-800"
              >
                {/* Placeholder for a shopping bag icon (assuming you use font-awesome or similar) */}
                <i className="fa fa-shopping-bag text-lg"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10">
          <ul className="flex space-x-2 text-sm">
            <li>
              <button
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded hover:bg-gray-100 transition disabled:opacity-50"
              >
                {"<"} {/* Changed from "Less than" for standard look */}
              </button>
            </li>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page) => (
                <li key={page}>
                  <button
                    onClick={() => handlePageClick(page)}
                    className={`px-3 py-1 border rounded ${
                      page === currentPage
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                </li>
              )
            )}

            <li>
              <button
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded hover:bg-gray-100 transition disabled:opacity-50"
              >
                {">"} {/* Changed from "Greater than" for standard look */}
              </button>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default ShopPage;