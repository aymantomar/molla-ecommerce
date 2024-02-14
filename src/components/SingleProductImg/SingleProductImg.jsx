import { useState } from "react";
import style from "./SingleProductImg.module.css";

// eslint-disable-next-line react/prop-types
export default function SingleProductImg({ imageCover, images }) {
  const [image, setImage] = useState(imageCover);

  console.log("image", image);
  console.log("imageCover", imageCover);

  // const changeImage = () => {
  //   setImage();
  // };

  return (
    <div className="row ">
      <div className="col-md-3">
        <div className={`${style.all_images}`}>
          {images &&
            // eslint-disable-next-line react/prop-types
            images.map((image) => (
              <img
                onClick={(e) => {
                  setImage(e.target.src);
                }}
                src={image}
                alt="image"
                className="w-100"
                key={image}
              />
            ))}
        </div>
      </div>
      <div className="col-md-9">
        <div className={`${style.single_image}`}>
          <img src={image} alt="imageCover" className="w-100" />
        </div>
      </div>
    </div>
  );
}
