let buttonPlus = document.getElementById('buttonPlus')
let buttonMinus = document.getElementById('buttonMinus')
let buttonMultiply = document.getElementById('buttonMultiply')
let buttonDevide = document.getElementById('buttonDevide')


buttonPlus.addEventListener('click', function(){
    equal.value = Number(number1.value) + Number(number2.value)
})
buttonMinus.addEventListener('click', function(){
    equal.value = Number(number1.value) - Number(number2.value)
})
buttonMultiply.addEventListener('click', function(){
    equal.value = Number(number1.value) * Number(number2.value)
})
buttonDevide.addEventListener('click', function(){
    equal.value = Number(number1.value) / Number(number2.value)
})