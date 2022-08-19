var arr1 = [1, 2, 3, 4, 5]
var arr2 = [2, 4, 7, 2, 1, 4, 5, 2, 1]
var out = {}
for (var i = 0; i < arr1.length; i++){
    for (var j = 0; j < arr2.length; j++){
        if (arr1[i] === arr2[j]) {
            var char = arr1[i]
            if (out[arr1[i]] === undefined) {
                out[char] = 1;
            } else {
                var pre = out[char]
                out[char] = pre + 1
            }
        }
    }
}
console.log(out)
console.log(Object.keys(out).map(Number))