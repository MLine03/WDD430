export default function Navbar() {
  return (
    <nav className="p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Handcrafted Haven
      </h1>

      <div className="space-x-6">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
