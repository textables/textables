
async function checkForHighScore(newScore) {
  console.log(`Ran: checkForHighScore with a score of ${newScore}`);

  return await fetch('/api/v1/highscores/lowest', {
    method: 'GET',
    header: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(async(lowestHighScore) => {
      console.log(`lowestHighScore is: ${lowestHighScore}`);
      let isNewScoreHigher = false;
      if(newScore > lowestHighScore.score) {
        isNewScoreHigher = true;
        Promise.resolve(deleteLowestScore(lowestHighScore._id));
      }
      return isNewScoreHigher;
    });
}

async function deleteLowestScore(lowScoreId) {
  console.log('Ran deleted Lowest Score');

  await fetch(`/api/v1/highscores/${lowScoreId}`, {
    method: 'DELETE',
    header: { 'Content-Type': 'application/json' }
  });
}

async function addHighScore(score) {
  //
}

