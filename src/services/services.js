export const MoviesApi = async () => {
  return await fetch('https://wookie.codesubmit.io/movies', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer Wookie2019',
    },
  });
};
