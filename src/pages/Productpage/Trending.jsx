import { useState } from "react";
import { Link } from "react-router-dom";
import { allProducts } from "./ShopPage ";

const filters = [
  { name: "Show All", category: "all" },
  { name: "Laptops", category: "laptop" },
  { name: "CCTV", category: "cctv" },
  { name: "Routers", category: "router" },
  { name: "All Accessories", category: "accessory" },
];

const ITEMS_PER_PAGE = 4;

const Trending = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts =
    currentFilter === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === currentFilter);

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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Trending Products
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.category}
              onClick={() => {
                setCurrentFilter(filter.category);
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium shadow-sm transition-all duration-300 ${
                currentFilter === filter.category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {currentProducts.map(
            ({ id, name, image, oldPrice, newPrice, type }) => (
              <div
                key={id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 w-full max-w-xs"
              >
                <Link
                  to={`/productdetails/${id}?type=${type || "all"}`}
                  className="block w-full h-64 overflow-hidden rounded-t-xl"
                >
                  {/* Full width and height image */}
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Link>

                <div className="p-5 flex flex-col justify-between h-50">
                  {/* Price */}
                  {oldPrice && newPrice && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className="line-through text-gray-400">
                        {oldPrice}
                      </span>
                      <span className="text-red-600 font-semibold text-lg">
                        {newPrice}
                      </span>
                    </div>
                  )}

                  {/* Product Name */}
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
                    {name}
                  </h4>

                  {/* Buy Button */}
                  <Link
                    to={`/productdetails/${id}?type=${type || "all"}`}
                    className="inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            )
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <ul className="inline-flex space-x-2 text-gray-700">
              <li>
                <button
                  onClick={() => handlePageClick(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 disabled:opacity-50"
                >
                  &lt;
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <li key={page}>
                    <button
                      onClick={() => handlePageClick(page)}
                      className={`px-4 py-2 rounded-lg border font-medium ${
                        page === currentPage
                          ? "bg-blue-600 text-white border-blue-600"
                          : "border-gray-300 hover:bg-gray-200"
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
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 disabled:opacity-50"
                >
                  &gt;
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Trending;
