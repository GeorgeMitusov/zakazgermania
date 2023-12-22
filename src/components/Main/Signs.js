import React, { useContext } from "react";
import { Context } from "../../context/Context";

import BgPicture from "../../assets/main-signs/2.jpg";

import { Parallax } from "react-parallax";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../styles/Main/Signs.scss";

const Signs = () => {
  const { signsData } = useContext(Context);

  const signsItem = signsData.map((i, id) => (
    <div key={id} className="signs-item">
      <FontAwesomeIcon className="signs-item-icon" icon={i.icon} />
      <div className="signs-item-descr">
        <h1> {i.title} </h1>
        <p> {i.descr} </p>
      </div>
    </div>
  ));

  return (
    <div className="signs">
      <Parallax
        blur={{ min: 0, max: 20 }}
        bgImage={BgPicture}
        bgImageAlt="the cat"
        strength={-200}
        className="signs-parallax"
      >
        <div className="signs-container">{signsItem}</div>
      </Parallax>
    </div>
  );
};

export default Signs;
