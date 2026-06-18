import Image from "next/image";

export default function ProductCard({ product }: any) {
  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm">
      <div className="relative w-full h-48 mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded mb-3"
        />
      </div>

      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="text-gray-600 text-sm mt-1">{product.description}</p>
      <p className="mt-2 font-bold">${product.price}</p>
    </div>
  );
}