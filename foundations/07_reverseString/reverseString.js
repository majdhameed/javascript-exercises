const reverseString = function(string) {
    let stringArray = []
    let result;

    for(i=0; i<string.length;i++){
        stringArray.push(string[string.length-1-i])
    }
    
    result = stringArray.reduce((acc, currLetter) => {
        return acc + currLetter
    }, "")

    return result
};

// Do not edit below this line
module.exports = reverseString;
