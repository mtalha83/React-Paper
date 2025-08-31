import { Link } from "react-router-dom";

interface Product {
  id: number | string;
  title: string;
  price: number;
  thumbnail: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="overflow-hidden rounded-lg border bg-white">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-48 w-full object-cover"
        />
      </Link>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-gray-800">
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </h3>
        <p className="mb-4 text-gray-600">${product.price}</p>
        <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
