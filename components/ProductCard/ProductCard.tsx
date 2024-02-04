import { Product } from "@/types";
import CartToggleBtn from "./CartToggleBtn";
import Image from "next/image";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="w-56 overflow-hidden rounded-lg border border-slate-300 transition-shadow hover:shadow-xl">
      <div className="relative h-60 shadow">
        <CartToggleBtn productId={product.id} />

        {/* Product image */}
        <Image
          className="size-full cursor-pointer object-contain p-4"
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
