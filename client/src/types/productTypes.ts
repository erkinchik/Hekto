import { LOGIN_ROUTE } from "../utils/paths";

export interface IDataBody {
  title: string;
  subtitle: string;
  fromText: string;
  btnText: string;
  linkTo: string;
}

export interface IProduct {
  id: number;
  brand_id: number;
  img: string;
  name: string;
  price: number;
  category_id: number;
  in_stock: number;
  sale: boolean;
}
export interface IProducts {
  count: number;
  rows: IProduct[];
}
