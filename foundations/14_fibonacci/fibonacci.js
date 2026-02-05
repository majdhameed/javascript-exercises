const fibonacci = function(n) {
    fibArray = [0,1]


    if (typeof(n) != Number){
        if (parseInt(n) === null){
            return "OOPS"
        }
        else{
            n = parseInt(n)
        }
    }
    if (n<0){
        return "OOPS"
    }

    if (n === 0){
        return 0
    }

    for (i=1; i<n; i++){
        nextNum = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
        fibArray.push(nextNum)
    }
    return fibArray[fibArray.length-1]

};

// Do not edit below this line
module.exports = fibonacci;
