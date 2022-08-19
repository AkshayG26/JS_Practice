function detectPrime(num) {    
    var count = 0
    for (var i = 0; i <= num; i++){
        if (num % i === 0) {
            count++  
        }
    }
    console.log(count)
    if (count == 2) {
        return true
    } else {
        return false
    }
}


function primeSeries(n) {
    var out = []
    for (var i = 0; i <= n; i++){
        if (detectPrime(i)) {
            out.push(i)
        }
    }
    return out
}

console.log(primeSeries(50))