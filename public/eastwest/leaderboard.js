const leaderBoard = document.getElementById('leaderboard');

function getHighScores() {
  return fetch('/api/v1/highscores', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(highscores => {
      highscores.forEach((highscore, i) => {
        const row = document.createElement('tr');
        const position = document.createElement('td');
        const name = document.createElement('td');
        const score = document.createElement('td');

        position.textContent = i + 1;
        name.textContent = `Kanye ${highscore.name}`;
        score.textContent = highscore.score;

        row.appendChild(position);
        row.appendChild(name);
        row.appendChild(score);

        leaderBoard.appendChild(row);
      });
    });
}
getHighScores();
