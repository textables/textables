export async function checkForHighScore(newScore) {
  console.log(`Ran: checkForHighScore with a score of ${newScore}`);

  return await fetch('/api/v1/highscores/lowest', {
    method: 'GET',
    header: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(lowestHighScore => {
      console.log(`lowestHighScore is: ${lowestHighScore}`);
      let isNewScoreHigher = false;
      if(newScore > lowestHighScore.score) isNewScoreHigher = true;
      return isNewScoreHigher;
    });
}

export async function deleteLowestScore() {
  await fetch('/api/v1/highscores/lowest/delete', {
    method: 'DELETE',
    header: { 'Content-Type': 'application/json' }
  })
    .then(res => console.log(`deleted: ${res.json()}`));
}

export async function addHighScore(name, score) {
  await fetch('/api/v1/highscore', {
    method: 'POST',
    header: { 'Content-Type': 'application/json' },
    body: {
      name: name,
      socre: score
    }
  })
    .then(res => console.log(`created: ${res.json()}`));
}
