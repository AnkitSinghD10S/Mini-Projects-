const num1=document.getElementById("num1")
const num2=document.getElementById("num2")
const num3=document.getElementById("num3")
const num4=document.getElementById("num4")
const num5=document.getElementById("num5")
const num6=document.getElementById("num6")
const num7=document.getElementById("num7")
const num8=document.getElementById("num8")
const num9=document.getElementById("num9")
const num0=document.getElementById("num0")

let resultEl= document.getElementById("result")
let opreation
const multiEl =document.getElementById("multi")
const divEl =document.getElementById("div")
const subEl =document.getElementById("sub")
const sumEl= document.getElementById("sum")
const restEl =document.getElementById("reset")
const calEl =document.getElementById("cal")
const  dotEl =document.getElementById("float")
let firstNum=0
let secondNum=0
let flag=true
restEl.addEventListener("dblclick",function(){
    resultEl.textContent="";
    console.log("cliked")
})

num1.addEventListener("click",function(){
    if(flag){
    firstNum =10*firstNum + int(num1.textContent);
    resultEl.textContent+=firstNum;
    }
    else{
        secondNum =10*secondNum+num1.textContent;
    }
    // console.log(firstNum)
})
num2.addEventListener("click",function(){
    let num = num2.textContent;
    resultEl.textContent+=num;
    firstNum=resultEl.textContent
    // console.log(firstNum)
})
num3.addEventListener("click",function(){
    let num = num3.textContent;
    resultEl.textContent+=num;
    firstNum=resultEl.textContent
    // console.log(firstNum)
})
num4.addEventListener("click",function(){
    let num = num4.textContent;
    resultEl.textContent+=num;
    // console.log(firstNum)
})
num5.addEventListener("click",function(){
    let num = num5.textContent;
    resultEl.textContent+=num;
    // console.log(firstNum)
})
num6.addEventListener("click",function(){
    let num = num6.textContent;
    resultEl.textContent+=num;
    // console.log(firstNum)
})
num7.addEventListener("click",function(){
    let num = num7.textContent;
    resultEl.textContent+=num;
    // console.log(firstNum)
})
num8.addEventListener("click",function(){
    let num = num8.textContent;
    resultEl.textContent+=num;
    // console.log(firstNum)
})
num9.addEventListener("click",function(){
    let num = num9.textContent;
    resultEl.textContent+=num;
    // console.log(firstNum)
})
num0.addEventListener("click",function(){
    let num = num0.textContent;
    resultEl.textContent+=num;
    // console.log(firstNum)
})
sumEl.addEventListener("click",function(){
    
})
