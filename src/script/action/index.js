import {SPOTIFY_API} from '../middleware/spotify-api.js';
/*
 * action types
 */
export const ARTIST_REQUEST = 'ARTIST_REQUEST';
export const ARTIST_SUCCESS = 'ARTIST_SUCCESS';
export const ARTIST_FAILURE = 'ARTIST_FAILURE';

/*
 * action creators
 */

function requestArtist(artist) {
  return {
    [SPOTIFY_API]: {
      types: [ARTIST_REQUEST, ARTIST_SUCCESS, ARTIST_FAILURE],
      artist: artist
    }
  };
}

export function fetchArtist(userInput) {
  return (dispatch, getState) => {
    if(userInput.length == 0) {
      return dispatch;
    }
    else {
      return dispatch(requestArtist(userInput));
    }
  };
}
