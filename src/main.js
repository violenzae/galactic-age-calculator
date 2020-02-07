import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Ager } from './calc';

$(document).ready(function() {

  let newAger = new Ager("Mercury", 90, "Female", "White", "Bachelors", 0, 84);

  newAger.remainConvert();


});