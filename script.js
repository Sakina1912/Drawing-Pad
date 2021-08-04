const canvas = document.getElementById('canvas')
const colorElm = document.getElementById('color')
const ctx = canvas.getContext('2d')
const clear = document.getElementById('close')
const sizeElm = document.getElementById('size')
const addSize = document.getElementById('addSize')
const minusSize= document.getElementById('minusSize')
const eraser = document.getElementById('eraser')
const circle = document.getElementById('circle')
let x
let y
let isPressed = false
let isCircle = false
let size = 10
let color = 'black'

function drawCircle(x,y){
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size*2
    ctx.stroke()
}

function updateSize(){
    sizeElm.innerText  = size
}


canvas.addEventListener('mousedown' , e=>{
    isPressed = true
    x=e.offsetX
    y=e.offsetY

})

canvas.addEventListener('mouseup' , e=>{
    isPressed = false 
    x=undefined
    y=undefined
})

canvas.addEventListener('mousemove', e =>{
    if(isPressed){
         let x2 = e.offsetX
         let y2 = e.offsetY

        drawCircle(x2,y2)
        drawLine(x,y,x2,y2)

        x=x2
        y=y2
    }
    // if(circle.classList.contains('active')){
    //     drawCircleStroke(x,y)
    // }
})

clear.addEventListener('click', ()=> ctx.clearRect(0,0,canvas.width,canvas.height))

addSize.addEventListener('click',()=>{
    size+=5
    if(size>50){
        size = 50
    }
    updateSize()
})

minusSize.addEventListener('click',()=>{
    size-=5
    if(size<5){
        size = 5
    }
    updateSize()
})

colorElm.addEventListener('change',e =>{ color = e.target.value})

eraser.addEventListener('click', ()=> color = '#f5f5f5')


// function drawCircleStroke(x,y){
//     ctx.beginPath()
//     ctx.arc(x, y, size, 0, Math.PI * 2)
//     ctx.fillStyle = color
//     ctx.stroke()
// }

// circle.addEventListener('click',(e)=>{
//     circle.classList.add('active')
//     x=e.offsetX
//     y=e.offsetY
// })