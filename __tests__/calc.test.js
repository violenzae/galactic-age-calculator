import {Ager} from './../src/calc.js';

describe('Ager', () => {

  test('returns age in mercury years', () => {
  let newAger = new Ager(32);
  newAger.mercuryAge = Math.floor(newAger.earthAge/.24);
  
  expect(newAger.mercuryAge).toEqual(133);
  });
});