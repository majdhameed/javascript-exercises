const palindromes = function (string) {
    l = 0;
    r = string.length - 1;
    function isletter(char){
        return /^[a-zA-Z0-9]$/.test(char)
    }
    while (l<=r){
        while(!isletter(string.charAt(l))){
            l++;
        }
        while(!isletter(string.charAt(r))){
            r--;
        }
        if(string.charAt(l).toLowerCase() != string.charAt(r).toLowerCase()){
            return false
        }
        console.log(l, r)
        console.log(string.charAt(l), string.charAt(r))
        l++;
        r--;
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
