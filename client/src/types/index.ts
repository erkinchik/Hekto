import { LOGIN_ROUTE } from "../utils/paths";

export interface IDataBody {
  title: string;
  subtitle: string;
  fromText: string;
  btnText: string;
  linkTo: string;
}

export interface IDevice {
  id: number;
  brand_id: number;
  img: string;
  name: string;
  price: number;
  type_id: number;
}
export interface IDevices {
  count: number;
  rows: IDevice[];
}
