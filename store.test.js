const { getState, updateState } = require('./store');

describe('store', () => {
  it('returns state object with getState', () => {
    const state = getState();
    expect(state).toEqual({
      shirts: 5,
      pants: 10,
      toys: 100,
      shoes: 1,
      apples: 9
    });
  });

  it('updates state object with updateState', () => {
    updateState('pants', 23);
    const state = getState();
    expect(state).toEqual({
      shirts: 5,
      pants: 23,
      toys: 100,
      shoes: 1,
      apples: 9
    });
  });
});

