import { connect } from "react-redux";
import CarouselWrapperComponent from "../components/CarouselWrapper";
import { getAlbums, setAllAlbums, setAfter } from "../actions";

const mapDispatchToProps = dispatch => ({
  dispatchAlbums: data => {
    dispatch(getAlbums(data));
  },
  dispathchAllAlbums: data => {
    dispatch(setAllAlbums(data));
  },
  dispatchAfter: data => {
    dispatch(setAfter(data));
  }
});

const mapStateToProps = state => {
  return {
    albums: state.albumReducer.albums,
    allAlbums: state.albumReducer.allAlbums,
    after: state.albumReducer.after
  };
  // return state.albumReducer;
};

const CarouselWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(CarouselWrapperComponent);

export default CarouselWrapper;
