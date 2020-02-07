import $ from 'jquery';
import { Ager } from './calc';

$(document).ready(function() {

let newAger = new Ager("Mercury", 32, "Female", "White", "Bachelors", 0, 84);

newAger.remainConvert();
console.log(newAger.planetRemain);

});