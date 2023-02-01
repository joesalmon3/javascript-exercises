const add = function(num1, num2) {
	let answer = num1+num2;
  return answer;
};

const subtract = function(num1,num2) {
	let answer = num1-num2;
  return answer;
};

const sum = function(array) {
	let total = 0;
  for (var i = 0; i < array.length; i++) { 
    total += array[i];
  }
  return total;
};

const multiply = function(array) {
  let total = array[0];
  if (array.length===1) {
    return total;
  } else {
  
  for (var i = 1; i < array.length; i++) { 
    total = total*array[i];
  }}
  return total;
};

const power = function(num1,num2) {
	let answer = num1;
  for (var i=1; i<num2; i++) {
    answer = answer * num1;
  }
  return answer;
};

const factorial = function(num1) {
	if (num1===0 || num1===1) {
    return 1;
  } else {
    let answer = 1;
    for (i=num1;i>0;i--) {
      answer = answer*i;
    }
    return answer;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
