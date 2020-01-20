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