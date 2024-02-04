import ProductCard from "@/components/ProductCard";
import productService from "@/services/productService";

export default async function Home() {
  const products = await productService.getAll();
  return (
    <>
      <h1 className="text-center text-4xl font-medium">Home</h1>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
