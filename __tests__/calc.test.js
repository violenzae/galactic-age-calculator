import {Ager} from './../src/calc.js';

describe('Mercury convert', () => {

  test('returns age in mercury years', () => {
  let newAger = new Ager("Mercury", 32, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  
  newAger.baseAgeConvert();
  
  expect(newAger.mercuryAge).toEqual(133);
  });
});

describe('venus convert', () => {

  test('returns age in venus years', () => {
  let newAger = new Ager("Venus", 32)

  newAger.baseAgeConvert();

  expect(newAger.venusAge).toEqual(51);
  });
});

describe('mars convert', () => {

  test('returns age in mars years', () => {
  let newAger = new Ager("Mars", 32)



  expect(newAger.marsAge).toEqual(2);
  });
});