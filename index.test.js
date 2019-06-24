const createDog = require('./create-dog');

describe('createDog function', () => {
  it('returns a dog object', () => {
    const dog = createDog('spot', 5, '20lbs');
    expect(dog).toEqual({
      name: 'spot',
      age: 5,
      weight: '20lbs'
    });
  });
});

