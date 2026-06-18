import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white px-10 py-4 flex gap-6 font-medium">
      <Link href="/">Home</Link>
      <Link href="#products">Products</Link>
      <Link href="#sellers">Sellers</Link>
      <Link href="#reviews">Reviews</Link>
    </nav>
  );
}