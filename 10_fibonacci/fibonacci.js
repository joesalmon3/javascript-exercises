const fibonacci = function(num) {
    if (num<1) {
        return "OOPS";
    }
    num = parseInt(num);
    var a = 1, b = 0, temp;

    while (num >= 1){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
