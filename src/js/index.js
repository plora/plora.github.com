"use strict";

var plora = {};
(function () {
  plora.Events = function () {
    console.log("안녕하세요");
  }, plora.functions = {
    index: function index() {}
  };
})();
/*document.addEventListener('DOMContentLoaded', () => {
  plora.Events();
  plora.functions.index();

}) vanila js*/
$(document).ready(function () {
  plora.Events();
  plora.functions.index();
});