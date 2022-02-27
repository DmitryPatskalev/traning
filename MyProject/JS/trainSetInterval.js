let button = document.getElementById('button')
let input1 = document.getElementById('input1')
button.addEventListener('click', function func(){
    input0.value = 0
    let interval = setInterval(() => {
       input0.value ++
        if(input0.value == 10){
            clearInterval(interval)
        }
        if(input0.value == 1){
            input1.style.backgroundColor = 'red'
        }
        if(input0.value == 2 ){
            input2.style.backgroundColor = 'orange'
        }
        if(input0.value == 3){
            input3.style.backgroundColor = 'yellow'
        }
        if(input0.value == 4){
            input4.style.backgroundColor = 'green'
        }
        if(input0.value == 5){
            input5.style.backgroundColor = 'blue'
        }
        if(input0.value == 6){
            input6.style.backgroundColor = 'pink'
        }
        if(input0.value == 7){
            input7.style.backgroundColor = 'purple'
        }
        if(input0.value == 8){
            input8.style.backgroundColor = 'brown'
        }
        if(input0.value == 9){
            input9.style.backgroundColor = 'navy'
        }
        if(input0.value == 10){
            input10.style.backgroundColor = 'magenta'
        }
    }, 1000);
})