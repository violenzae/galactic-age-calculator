import $ from 'jquery';
import { Ager } from './calc';

$(document).ready(function() {

  let newAger = new Ager("Mercury", 90, "Female", "White", "Bachelors", 0, 84);

  newAger.remainConvert();


});