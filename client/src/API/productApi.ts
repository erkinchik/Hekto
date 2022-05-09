import { $host } from "../utils/host";
import { RouteParams } from "../types/routeTypes";

export class ProductApi {
  static async getProduct(id: string) {
    const { data } = await $host.get(`/device/${id}`);
    return data;
  }
}
