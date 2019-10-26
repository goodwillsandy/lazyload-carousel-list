const albumReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALBUMS":
      return {
        ...state,
        albums: [...state.albums, ...action.payload]
      };

    case "GET_ALBUM_DETAILS":
      return {
        ...state,
        albumDetails: {
          ...state.albumDetails,
          [action.payload[0].albumId]: action.payload
        }
      };

    case "SET_ALL_ALBUMS":
      return {
        ...state,
        allAlbums: action.payload
      };

    case "SET_AFTER":
      return {
        ...state,
        after: action.payload
      };

    default:
      return state;
  }
};

export default albumReducer;
