const reverseString = function(string) {
    let myArray = string.split("");
    let tempArray = myArray.reverse();
    return tempArray.join('');

};

// Do not edit below this line
module.exports = reverseString;
