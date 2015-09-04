import 'fetch';

const API_ROOT = 'https://api.spotify.com/v1/';
const API_KEY = '';

function fetchArtist(artist) {
  let route = `search`;
  let queryString = `?q=${artist}&type=artist`;
  let url = `${API_ROOT}${route}${queryString}`;
  return fetch(url).then(response => {
    return response.json();
  });
}

export const SPOTIFY_API = Symbol('Spotify API');

export default store => next => action => {

  const spotifyApi = action[SPOTIFY_API];
  if (typeof spotifyApi === 'undefined') {
    return next(action);
  }
  let {artist} = spotifyApi;
  const {types} = spotifyApi;

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[SPOTIFY_API];
    return finalAction;
  }

  const [requestType, successType, failureType] = types;
  next(actionWith({ type: requestType }));

  return fetchArtist(artist).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  );
};
