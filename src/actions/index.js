import { actionTypes } from "../constants";

export const getAlbums = payload => {
  return {
    type: actionTypes.getAlbums,
    payload
  };
};

export const getAlbumDetails = payload => {
  return {
    type: actionTypes.getAlbumDetails,
    payload
  };
};

export const setAllAlbums = payload => {
  return {
    type: "SET_ALL_ALBUMS",
    payload
  };
};

export const setAfter = payload => {
  return {
    type: "SET_AFTER",
    payload
  };
};
