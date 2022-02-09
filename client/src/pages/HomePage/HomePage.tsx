import React, { FC, useEffect, useState } from "react";

import { Api } from "../../API/api";
import { IDevice } from "../../types";
import { MySlider } from "../../components/index";

const HomePage: FC = () => {
  let [devices, setDevices] = useState<IDevice[]>([
    {
      brand_id: 2,
      id: 12,
      img: "917f811f-9fd4-4cda-b116-698b90bcbd82.jpg",
      name: "iphone 11 pro ",
      price: 62000,
      type_id: 5,
    },
    {
      brand_id: 2,
      id: 13,
      img: "917f811f-9fd4-4cda-b116-698b90bcbd82.jpg",
      name: "iphone 11 pro ",
      price: 62000,
      type_id: 5,
    },
  ]);

  useEffect(() => {
    // async function fetch() {
    //   const device = await Api.getProducts();
    //   console.log(device);
    //   setDevices(device!);
    //   console.log(devices, "dddd");
    // }
    // fetch();
  }, []);

  return (
    <div className="wrapper">
      <section className="slider">
        <MySlider />
      </section>
      <div className="section2">fjwfwejfkwf fewfewefwef fewwefwef</div>
    </div>
  );
};

export default HomePage;
