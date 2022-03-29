function battle(x, y) {
    var obj = {A:1,  B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9, J:10, K:11,L:12, M:13, N:14, O:15, P:16, Q:17, R:18,  S:19, T:20, U:21, V:22, W:23,  X:24, Y:25, Z:26, a:0.5,  b:1, c:1.5, d:2, e:2.5, f:3, g:3.5, h:4, i:4.5, j:5, k:5.5, l:6, m:6.5, n:7, o:7.5, p:8, q:8.5, r:9,  s:9.5, t:10, u:10.5, v:11, w:11.5, x:12,  y:12.5,  z:13}
   
    var sum1 = 0
    var sum2 = 0
    var arr1 = x.split('')
    var arr2 = y.split('')
    for(var key in obj){
      for(var elem of arr1){
        if(key === elem){
          sum1 += obj[key]
        }
      }
      for(var elem of arr2){
        if(key === elem){
          sum2 += obj[key]
        }
      }
    }
    return (sum1 > sum2) ? x:
    (sum1 < sum2) ? y: "Tie!"
    }
  console.log(battle("One", "Two"))//, "Two", "Unfair fight!"));
  console.log(battle("One", "Neo"))//, "One", "Unfair fight!"));
  console.log(battle("One", "neO"))//, "Tie!", "Unfair fight!"));
  console.log(battle("Foo", "BAR"))//, "Tie", "Unfair fight!"));
  console.log(battle("Four", "Five"))//, "Four", "Unfair fight!"));