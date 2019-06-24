const { getState, updateState } = require('./store');

describe('store functions', () => {
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
    updateState('skirts', 23);
    const state = getState();
    expect(state).toEqual({
      shirts: 5,
      pants: 10,
      toys: 100,
      shoes: 1,
      apples: 9,
      skirts: 23
    });
  });
});
