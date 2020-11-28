const API_URL = 'https://movie-nodejs.herokuapp.com';
const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

const sendApi = (url, method, token) => {
  return fetch(url, {
    method,
    headers: {'Authorization': token ? `Bearer ${token}` : 'Basic ZGVvazpkZW9r'},
  });
};

const getToken = async () => {
  const url = `${API_URL}/auth/login`;
  try {
    const res = await sendApi(url, 'POST');
    return res.text();
  } catch (e) {
    console.log(e);
  }
};

export const searchMovie = async (query) => {
    const url = `https://movie-nodejs.herokuapp.com/api/search/${query}`;
    const method = 'GET';
    const token = await getToken();
    const res = await sendApi(url, method, token);
    const data = await res.json();
    const movieData = data.results;

    return movieData.map((x) => {
      if(x.poster_path) {
        x.poster_path = `${POSTER_URL}${x.poster_path}`;
      }
      return x;
    })
}
