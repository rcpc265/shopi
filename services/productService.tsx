import { Product } from "@/types/product";
import APIClient from "./api-client";

const productService = new APIClient<Product>("products");

export default productService;
