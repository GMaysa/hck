let display = document.getElementById('main')
let buttons = Array.from(document.getElementsByClassName('button'))

buttons.map( button =>{
    button.addEventListener('click', (e) =>{
        switch(e.target.innerText){
            case 'C':
                display.value = ''
                break
            case '⬅':
                if (display.value) display.value = display.value.slice(0, -1)
                break
            case '=':
                try{
                    display.value = eval(display.value)
                }catch{
                    display.value = "Error!"
                }
                break
            default:
                if(display.value == 'Error!') display.value = ''
                display.value += e.target.innerText
        }
    })
})