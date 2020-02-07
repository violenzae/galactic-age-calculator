export class Ager {
  constructor(planet, earthAge, gender, race, education, mercuryAge, venusAge, marsAge, jupiterAge, earthExpectancy, mercuryRemain, venusRemain, marsRemain, jupiterRemain){
    this.planet = planet;
    this.earthAge = earthAge;
    this.gender = gender;
    this.race = race;
    this.education = education;
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
    } else if(this.planet === "Mars") {
      this.marsAge = Math.floor(this.earthAge/1.88);
      return this.marsAge;
    } else if(this.planet === "Jupiter") {
      this.jupiterAge = Math.floor(this.earthAge/11.86);
      return this.jupiterAge;
    }
  }

  expectancyDemo() {
    this.earthExpectancy = 0;
    if (this.gender === "Female" && this.race === "White") {
      return this.earthExpectancy += 81;
    } else if (this.gender === "Male" && this.race === "White") {
      return this.earthExpectancy += 76;
    } else if (this.gender === "Female" && this.race === "Black") {
      return this.earthExpectancy += 78;
    } else if (this.gender === "Male" && this.race === "Black") {
      return this.earthExpectancy +=72;
    } else if (this.gender === "Female" && this.race === "Asian") {
      return this.earthExpectancy += 88;
    } else if (this.gender === "Male" && this.race === "Asian") {
      return this.earthExpectancy += 84;
    } else if (this.gender === "Female" && this.race === "Hispanic") {
      return this.earthExpectancy += 85;
    } else if (this.gender === "Male" && this.race === "Hispanic") {
      return this.earthExpectancy += 80;
    } 
  }

  expectancyEdu() {
    if (this.gender === "Female" && this.education === "Bachelors") {
        return this.earthExpectancy += 3;
      } else if (this.gender === "Male" && this.education === "Bachelors") {
        return this.earthExpectancy += 2;
      } else if (this.gender === "Male" && this.education === "No Highschool") {
        return this.earthExpectancy -= 7;
      } else if (this.gender === "Female" && this.education === "No Highschool") {
        return this.earthExpectancy -=6;
      }
    }

    expectancyEarthTotaler() {
    this.expectancyDemo() + this.expectancyEdu();
    return this.earthExpectancy;
  }
}
