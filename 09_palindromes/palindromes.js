//strip punctuation and spaces
//convert to lowercase
//compare string reverse with original

const palindromes = function (s) {
    s = s.toLowerCase();
    var punctuationless = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var finalString = punctuationless.replace(/\s+/g, '');

    let myArray = finalString.split("");
    let tempArray = myArray.reverse();
    let reverseArray = tempArray.join('');

    if (reverseArray==finalString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
