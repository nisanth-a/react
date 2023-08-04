import React from "react";
import Image from "./image-1.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function App() {
  return (
    <div>
      <img className="normal_image" src={Image}></img>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam<br></br>
        assumenda reiciendis officiis, eaque possimus perspiciatis nostrum?
        <br></br>
        Totam praesentium cupiditate dicta nulla velit atque ducimus numquam
        <br></br>
        dolor maiores. Quos, illum fugit.
      </p>
      <LazyLoadImage
        className="lazy_image"
        src={Image}
        alt="Image Alt"
        loading="lazy"
      />
      {/* <img className="" src={Image} loading="lazy"></img> */}
    </div>
  );
}
