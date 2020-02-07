import {Ager} from './../src/calc.js';

describe('Ager', () => {

  test('returns age in mercury years', () => {
  let newAger = new Ager("Mercury", 32, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  newAger.baseAgeConvert();
  
  expect(newAger.mercuryAge).toEqual(133);
  });
});