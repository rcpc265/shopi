import { Product } from "@/types";
import Image from "next/image";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="w-56 overflow-hidden rounded-lg border border-slate-300 transition-shadow hover:shadow-lg">
      <div className="relative h-60 shadow">
        {/* Add to cart button */}
        <button className="absolute right-3 top-3 z-10 flex size-6 items-center justify-center rounded-full bg-black/80 pb-0.5 text-xl text-white transition-transform hover:scale-110 hover:bg-black">
          +
        </button>

        {/* Product image */}
        <Image
          className="size-full object-contain p-4"
          src={product.image}
          alt={product.title}
          sizes="100%"
          fill={true}
        />

        {/* Product category */}
        <small className="absolute bottom-2 left-2 rounded-lg bg-white/70 px-2 py-1 text-[11px] font-medium uppercase shadow">
          {product.category}
        </small>
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5">
        {/* Product title */}
        <p className="truncate text-[15px]">{product.title}</p>

        {/* Product price */}
        <p className="font-semibold">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
