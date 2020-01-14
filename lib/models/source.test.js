const Source = require('../models/Source');

describe('Source model', () => {
  it('has a required full name', () => {
    const source = new Source({});

    const { errors } = source.validateSync();
    expect(errors.fullName.message).toEqual('Path `fullName` is required.');
  });

});
