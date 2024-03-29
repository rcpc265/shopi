import { Product } from "@/types";
import APIClient from "./api-client";

const productService = new APIClient<Product>("products");

export default productService;
