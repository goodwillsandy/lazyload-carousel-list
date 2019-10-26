import React from "react";

const ImageInfo = props => {
  return (
    <>
      <a href={props.imgUrl}>
        <img className="thumbnail" alt="album thumbnail" src={props.imgSrc} />
      </a>
      <div className="font-size-smaller">
        <p>{props.title}</p>
        <p>id: {props.id}</p>
      </div>
    </>
  );
};

export default React.memo(ImageInfo);
