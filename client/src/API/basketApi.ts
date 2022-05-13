import { $host } from "../utils/host";

export class BasketApi {
  static async getBasketProducts(id: number | string ) {
    const { data } = await $host.get(`/basket/${id}`);
    return data;
  }
}
