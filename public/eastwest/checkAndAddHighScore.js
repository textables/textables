
async function checkForHighScore(newScore) {
  console.log(`Ran: checkForHighScore with a score of ${newScore}`)
  return await fetch('/api/v1/highscores/lowest', {
    method: 'GET',
    header: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(async(lowestHighScore) => {
      console.log(`lowestHighScore is: ${lowestHighScore}`);
      let isNewHighScore = false;
      if(newScore > lowestHighScore) {
        isNewHighScore = true;
        await fetch(`/api/v1/highscores/${lowestHighScore._id}`, {
          method: 'DELETE',
          header: { 'Content-Type': 'application/json' }
        });
      }
      return isNewHighScore;
    });
}

async function addHighScore(score) {
  //
}

