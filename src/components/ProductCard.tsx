type ProductProps = {
  name: string;
  description: string;
  image: string;
  price: number;
};

export default function ProductCard({
  name,
  description,
  image,
  price,
}: ProductProps) {
  return (
    <div className="border rounded-lg p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded"
      />

      <h2 className="font-bold text-xl mt-3">
        {name}
      </h2>

      <p>{description}</p>

      <p className="font-semibold mt-2">
        ${price}
      </p>
    </div>
  );
}