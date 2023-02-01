const sumAll = function(num1,num2) {
    let total=0;
    
    if (parseInt(num1)>parseInt(num2)) {
        x = parseInt(num2);
        y = parseInt(num1);
    } else {
        x = parseInt(num1);
        y = parseInt(num2);
    }
    if (x<0 || y<0) {
        return 'ERROR';
    }

    if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
       return 'ERROR';
    }

    
    for (i=x;i<(y+1);i++) {
        total += i
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
