function wrap(height, width, length) {
    var arr = []
    arr.push(height, width, length)
    var max = Math.max.apply(null, arr)
    var min = Math.min.apply(null, arr)
    for (i = 0; i < arr.length; i++) {
        return (max * 2 + min * 4 + arr[i] * 2) + 20
    }
}




console.log(wrap(17, 32, 11)) //, 162);
console.log(wrap(13, 13, 13)) //, 124);
console.log(wrap(1, 3, 1)) //, 32);