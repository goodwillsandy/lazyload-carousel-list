import React from "react";
import { apiEndPoints } from "../constants";
import Carousel from "../containers/Carousel";

const CarouselWrapper = props => {
  const apiCall = () => {
    fetch(apiEndPoints.AlBUMSAPI)
      .then(resp => resp.json())
      .then(data => {
        props.dispatchAlbums(data.slice(props.after, props.after + 3));
        props.dispatchAfter(props.after +3);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const loader = React.useRef(apiCall);

  React.useEffect(() => {
    loader.current = apiCall;
  }, [apiCall]);

  const observer = React.useRef(
    new IntersectionObserver(
      entries => {
        const first = entries[0];
        if (first.isIntersecting) {
          loader.current();
        }
      },
      { threshold: 1 }
    )
  );
  const [element, setElement] = React.useState(null);

  React.useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  // generating multiple carousel from state
  const markup = () => {
    if (props.albums) {
      return props.albums.map(e => {
        return (
          <div className="text-align-left" key={e.id}>
            <h3>{e.title}</h3>
            <div>
              <span>
                <strong>Id:</strong> {e.id}
              </span>
              &nbsp;
              <span>
                <strong>User-Id:</strong> {e.userId}
              </span>
            </div>
            <Carousel albumId={e.id} />
          </div>
        );
      });
    } else return [];
  };

  return (
    <div className="list-style-none no-padding">
      {markup()}
      <p ref={setElement}>loading more ...</p>
    </div>
  );
};

export default CarouselWrapper;
