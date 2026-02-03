const sumAll = function(a,b) {
    let sum = 0;

    if ((a * b < 0) || (typeof(a) != "number") || typeof(b) != "number" || Math.floor(a) != a || Math.floor(b) != b){
        return ("ERROR")
    }

    if (a>b){
        let temp = a;
        a = b;
        b = temp;
    }

    for (i=a; i<=b; i++){
        sum += i;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
