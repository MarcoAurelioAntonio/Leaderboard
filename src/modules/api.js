const api = {
  async getScores() {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ve4MxL4AvkJcD7DH0rqv/scores/';
    const response = await fetch(url);
    const x = await response.json();
    const allScores = await x.result;
    return allScores; // or... return x.result;
  },
  async createNewScore(user, score) {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ve4MxL4AvkJcD7DH0rqv/scores/';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    /* console.log(response); */
    /* const result = await response.json();
    return result; */
    return response.json();
  },
};
/* api.createNewScore('Gustavo', 0);
api.getScores(); */

export default api;

/* oO5hyJUm3RRtlLY7NbFu */
