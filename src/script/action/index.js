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

function fetchArtist(artist) {
  return {
    [SPOTIFY_API]: {
      types: [ARTIST_REQUEST, ARTIST_SUCCESS, ARTIST_FAILURE],
      artist: artist
    }
  };
}

export function handleSearch(userInput) {

  return (dispatch, getState) => {
    return dispatch(fetchArtist(userInput));

  };
}
