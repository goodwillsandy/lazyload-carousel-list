import { connect } from "react-redux";
import CarouselComponent from "../components/Carousel";
import { getAlbumDetails } from "../actions";

const mapDispatchToProps = dispatch => ({
  dispatch: data => {
    dispatch(getAlbumDetails(data));
  }
});

const mapStateToProps = (state, props) => {
  const { albumReducer } = state;
  const { albumDetails } = albumReducer;
  const photosArray = getPhotos(props.albumId, albumDetails);
  return { [props.albumId]: photosArray };
};

const getPhotos = (id, Obj) => {
  if (id in Obj) {
    return Obj[id];
  } else return [];
};

const Carousel = connect(
  mapStateToProps,
  mapDispatchToProps
)(CarouselComponent);

export default Carousel;
