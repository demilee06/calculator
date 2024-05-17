let input1 = document.querySelectorAll(`#value`)[0]
let input2 = document.querySelectorAll(`#value`)[1]
let input3 = document.querySelectorAll(`#value`)[2]
let input4 = document.querySelectorAll(`#value`)[3]
let input5 = document.querySelectorAll(`#value`)[4]
let input6 = document.querySelectorAll(`#value`)[5]
let input7 = document.querySelectorAll(`#value`)[6]
let input8 = document.querySelectorAll(`#value`)[7]
let input9 = document.querySelectorAll(`#value`)[8]
let input10 = document.querySelectorAll(`#value`)[9]
let input11= document.querySelectorAll(`#value`)[10]
let input12 = document.querySelectorAll(`#value`)[11]
let input13 = document.querySelectorAll(`#value`)[12]
let input14= document.querySelectorAll(`#value`)[13]
let input15= document.querySelectorAll(`#value`)[14]
let input16 = document.querySelectorAll(`#value`)[15]

let buttons = document.querySelectorAll('.but')
let screen = document.querySelector('.screen')
let calculate = document.querySelector('.calculate')

buttons.forEach(button => {
    button.addEventListener('click',(event)=>{
      screen.value += (event.target.value)
    })
})

calculate.addEventListener('click',()=>{
    screen.value = eval(`${screen.value}`)
})