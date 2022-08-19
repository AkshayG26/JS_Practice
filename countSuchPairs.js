var arr = [3, 0, 6, 2, 7]
var n = arr.length
var k = 9

function countSuchPairs(n, k, arr) {
    var count = 0
    for (var i = 0; i < n; i++){
        for (var j = i + 1; j < n; j++){ 
            if (arr[i] + arr[j] === k) {
                count++
            }
        }
    }
    return count
}

console.log(countSuchPairs(n, k, arr))