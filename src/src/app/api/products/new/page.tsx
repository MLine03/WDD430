export default function NewProductPage() {
  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">
        Add Product
      </h1>

      <form className="space-y-4">
        <input
          placeholder="Product Name"
          className="w-full border p-2"
        />

        <textarea
          placeholder="Description"
          className="w-full border p-2"
        />

        <input
          placeholder="Price"
          type="number"
          className="w-full border p-2"
        />

        <button
          className="bg-black text-white px-4 py-2"
        >
          Save Product
        </button>
      </form>
    </div>
  );
}