const removeFromArray = function() {
    array = arguments[0]
    result = array.filter((n) => {
        isNotFiltered = true

        for (i=1; i<arguments.length; i++){
            if (n === arguments[i]){
                isNotFiltered = false
                break
            }
        }
        return isNotFiltered
    })
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
