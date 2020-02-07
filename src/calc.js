export class Ager {
  constructor(planet, earthAge, mercuryAge, venusAge, marsAge, jupiterAge, earthExpectancy, mercuryRemain, venusRemain, marsRemain, jupiterRemain){
    this.planet = planet;
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
    this.earthExpectancy = earthExpectancy;
    this.mercuryRemain = mercuryRemain;
    this.venusRemain = venusRemain;
    this.marsRemain = marsRemain;
    this.jupiterRemain = jupiterRemain;
  }

  baseAgeConvert() {
    if(this.planet === "Mercury") {
      this.mercuryAge = Math.floor(this.earthAge/.24);
      return this.mercuryAge;
    } else if(this.planet === "Venus") {
      this.venusAge = Math.floor(this.earthAge/.62);
      return this.venusAge; 
    }
  }
}