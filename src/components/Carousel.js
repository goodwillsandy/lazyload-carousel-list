import React, { useEffect } from "react";
import Slider from "react-slick";
import { apiEndPoints } from "../constants";
import ImageInfo from "./ImageInfo";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/slick-carousel/slick/fonts/slick.woff";

const Carousel = props => {
  useEffect(() => {
    fetch(`${apiEndPoints.ALBUMDETAILSAPI}?albumId=${props.albumId}`)
      .then(resp => resp.json())
      .then(data => {
        props.dispatch(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.albums]);

  const settings = {
    lazyLoad: true,
    slidesToShow: 8,
    slidesToScroll: 1
  };

  const markup = () => {
    if (props[props.albumId]) {
      return (
        <Slider
          {...settings}
          id={`album-${props.albumId}`}
          className="carousel list-style-none flex"
        >
          {props[props.albumId].map((e, index) => {
            if (index > 10) return;

            return (
              <div key={e.id} className="imageInfo">
                <ImageInfo
                  imgUrl={e.url}
                  imgSrc={e.thumbnailUrl}
                  title={e.title}
                  id={e.id}
                />
              </div>
            );
          })}
        </Slider>
      );
    } else return [];
  };

  return <div className="">{markup()}</div>;
};

export default Carousel;
