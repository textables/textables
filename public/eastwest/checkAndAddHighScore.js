export async function checkForHighScore(newScore) {
  return await fetch('/api/v1/highscores/lowest', {
    method: 'GET',
    header: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(lowestHighScore => {
      console.log(`lowestHighScore is: ${lowestHighScore.score}`);
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
    .then(res => console.log(`deleted: ${res}`));
}

export function addHighScore(name, score) {
  const highscoreObj = {
    name: name,
    score: score
  };

  fetch('/api/v1/highscores', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(highscoreObj)
  })
    .then(res => {
      console.log(`created: ${res.json()}`);
      return res.json();
    });
}
