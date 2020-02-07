import {Ager} from './../src/calc.js';

describe('Ager', () => {

  test('returns age in mercury years', () => {
  let newAger = new Ager;
  
  expect(newAger.mercuryAge).toEqual(133);
  });
});