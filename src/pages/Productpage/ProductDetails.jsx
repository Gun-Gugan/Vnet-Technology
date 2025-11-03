import { useParams, Link, useNavigate } from "react-router-dom";
import { allProducts } from "./ShopPage ";
import { useCart } from "../../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();            
  const { addToCart } = useCart();

  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-center mt-10">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Product Not Found
        </h2>
        <Link
          to="/shoppage"
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      newPrice: product.newPrice,
    });
    navigate("/cart"); // ← redirect to cart after adding
  };

  return (
    <section className="py-12 bg-gray-50 mt-10">
      {/* ---------- MAIN PRODUCT ---------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-80 h-80 object-contain border rounded-lg shadow-md bg-white p-4"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">
            {product.name}
          </h2>
          <p className="text-gray-500 text-sm capitalize">
            Category: {product.category}
          </p>

          <div className="flex items-center gap-2">
            {product.oldPrice && (
              <span className="line-through text-gray-400 text-lg">
                {product.oldPrice}
              </span>
            )}
            {product.newPrice && (
              <span className="text-red-500 text-2xl font-bold">
                {product.newPrice}
              </span>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed">
            {product.description ||
              `Experience premium quality and performance with this ${product.name} ${product.category}.`}
          </p>

          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>

          <Link
            to="/shoppage"
            className="block text-blue-600 hover:text-blue-800 mt-4"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>

      {/* ---------- RELATED PRODUCTS ---------- */}
      {relatedProducts.length > 0 && (
        <div className="max-w-6xl mx-auto mt-16 px-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Related Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/productdetails/${item.id}?type=${item.type}`}
                className="bg-white border rounded-lg shadow-sm hover:shadow-md transition p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-contain mb-3"
                />
                <h4 className="text-sm font-semibold text-gray-800 mb-1">
                  {item.name}
                </h4>
                <p className="text-red-500 font-semibold text-sm">
                  {item.newPrice || "—"}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;