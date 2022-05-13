import { $host } from "../utils/host";
import { RouteParams } from "../types/routeTypes";
import axios from "axios";
import { IProducts } from "../types/productTypes";

export class ProductApi {
  static async getProduct(id: string) {
    const { data } = await $host.get(`/product/${id}`);
    return data;
  }
  static async getAllProducts() {
    const { data } = await $host.get<IProducts>("/product");
    return data
  }
}
