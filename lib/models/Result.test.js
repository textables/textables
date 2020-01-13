const Result = require('./Result');

describe('Result Model', () => {
  it('Throws errors for missing required info', () => {
    const result = new Result();
    const { errors } = result.validateSync();

    expect(errors.tweetText.message).toEqual('Path `tweetText` is required.');
    expect(errors.source.message).toEqual('Path `source` is required.');
  });

  it('can create a Result', () => {
    const result = new Result({
      tweetText: 'I am a God!',
    });

    expect(result.toJSON()).toEqual({
      _id: result._id,
      tweetText: 'I am a God!',
      timestamp: result.timestamp,
    });
  });

});
