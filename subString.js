function subString(str) {
    var out = []
    for (var i = 0; i <= str.length; i++){
        for (var j = i + 1; j <= str.length; j++){
            var subStr = ""
            for (var k = i; k < j; k++){
                subStr = subStr + str[k]
            }
            out.push(subStr)
        }
    }
    return out
}

function palidrome(str) {
    var dummy = ""
    for (var i = str.length-1; i >= 0; i--){
        dummy = dummy + str[i]
    }
    if (str === dummy) {
        return true
    } else {
        return false
    }
}

function checkPalindromArr(str) {
    var subStrArr = subString(str)
    var out = []
    for (var i = 0; i < subStrArr.length; i++){
        if (palidrome(subStrArr[i])) {
            if (subStrArr[i].length > 1) {
                out.push(subStrArr[i].length)
            }
        }
    }
    return out
}
var out = checkPalindromArr("thisracecarisgood")
out = (out).sort((a, b) => a - b)
console.log(out[out.length-1])



