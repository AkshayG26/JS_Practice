// var arr = [1,2,3,3,4,5,5,6,6,7,7,8]

function returnUnique(a){
    var res=[];
var obj = {}
  
for (var i = 0; i < a.length; i++){
  var char  = a[i]
  if(obj[a] === undefined){
    obj[char] = 1
  }else{
    var pre = obj[char]
    obj[char] = pre+1
  }
    }
  for (var key in obj){
    if(obj[key] == 1){
      res.push(key)
  }
  }
  console.log("obj: ",obj)
return res
}

var ar1 = [1, 1, 2, 3, 4, 4, 5]
var ar2 = [1, 2, 2, 3, 4, 5, 5, 6]



var out1 = returnUnique(ar1)
// console.log(out1)
var out2 = returnUnique(ar2)
// console.log(out2)
var out3 = [...out1, ...out2]
// console.log(out3)
// console.log(returnUnique(out3).map(Number))

