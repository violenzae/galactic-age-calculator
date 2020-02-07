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

  newAger.baseAgeConvert();

  expect(newAger.marsAge).toEqual(17);
  });
});

describe('jupiter convert', () => {

  test('returns age in jupiter years', () => {
  let newAger = new Ager("Jupiter", 32)

  newAger.baseAgeConvert();

  expect(newAger.jupiterAge).toEqual(2);
  });
});

describe('earth life expectancy', () => {

  test('returns life expectancy in earth years', () => {
  let newAger = new Ager("", 0, "Female", "White", "Bachelors")
  
  newAger.expectancyEarthTotaler();

  expect(newAger.earthExpectancy).toEqual(84);
  });
});