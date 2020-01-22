const HighScore = require('./HighScore');

describe('HighScore Model', () => {
  it('Errors on missing info', () => {
    const highScore = new HighScore();
    const { errors } = highScore.validateSync();

    expect(errors.name.message).toEqual('Path `name` is required.');
    expect(errors.score.message).toEqual('Path `score` is required.');
  });
});
