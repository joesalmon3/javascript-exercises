const convertToCelsius = function(temp) {
  let temptemp = (temp-32)*(5/9);
  answer = Math.round( temptemp * 10) / 10;
  return answer;

};

const convertToFahrenheit = function(temp) {
  let temptemp = (temp*9/5)+32;
  answer = Math.round( temptemp * 10) / 10;
  return answer;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
