import { createStore } from "redux";
import rootReducer from "../reducers";

const store = createStore(
  // root reducer
  rootReducer,
  // initial state
  {
    albumReducer: {
      albums: [],
      allAlbums: [],
      after: 0,
      albumDetails: {
        1: []
      }
    }
  },
  //redux debugger
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
