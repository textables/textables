const Source = require('../models/Source');

describe('Source model', () => {
  it('has a required first name', () => {
    const source = new Source({});

    const { errors } = source.validateSync();
    expect(errors.firstName.message).toEqual('Path `firstName` is required.');
  });

  it('has a virtual that makes a full name', () => {
    const source = new Source({
      firstName: 'Edgar Allen',
      lastName: 'Poe'
    });

    expect(source.fullName).toEqual('Edgar Allen Poe');

  });

});
