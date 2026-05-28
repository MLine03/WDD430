import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="p-10">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Handcrafted Haven
        </h1>

        <p className="text-lg">
          Discover handmade products crafted with care.
        </p>
      </main>
    </>
  );
}