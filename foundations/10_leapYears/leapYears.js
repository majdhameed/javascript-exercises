const leapYears = function(n) {
    let leapYear = false
    
    if((n%4 === 0 && n%100 != 0) || (n%100 === 0 && n%100 === 0 & n % 400 === 0)){
        leapYear = true;
    }

    return leapYear
};

// Do not edit below this line
module.exports = leapYears;
