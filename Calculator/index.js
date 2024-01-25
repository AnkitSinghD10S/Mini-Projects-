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
    firstNum=0;
    secondNum=0;
    console.log("cliked")
})
num1.addEventListener("click",function(){
    let num = num1.textContent;
    resultEl.textContent+=num;
})

num2.addEventListener("click",function(){
    let num = num2.textContent;
    resultEl.textContent+=num;  
})

num3.addEventListener("click",function(){
    let num = num3.textContent;
    resultEl.textContent+=num;
})

num4.addEventListener("click",function(){
    let num = num4.textContent;
    resultEl.textContent+=num;
})

num5.addEventListener("click",function(){
    let num = num5.textContent;
    resultEl.textContent+=num;
})

num6.addEventListener("click",function(){
    let num = num6.textContent;
    resultEl.textContent+=num;
})

num7.addEventListener("click",function(){
    let num = num7.textContent;
    resultEl.textContent+=num;
})

num8.addEventListener("click",function(){
    let num = num8.textContent;
    resultEl.textContent+=num;
})

num9.addEventListener("click",function(){
    let num = num9.textContent;
    resultEl.textContent+=num;
})

num0.addEventListener("click",function(){
    let num = num0.textContent;
    resultEl.textContent+=num;
})

sumEl.addEventListener("click",function(){
    resultEl.textContent+="+";
})

subEl.addEventListener("click",function(){
    resultEl.textContent+="-";
})

divEl.addEventListener("click",function(){
    resultEl.textContent+="/";
})

multiEl.addEventListener("click",function(){
    resultEl.textContent+="*";
})

dotEl.addEventListener("click",function(){
    resultEl.textContent+=".";
})


calEl.addEventListener("click",function(){
    const result = resultEl.textContent;
    let first =""
    let second =""
    let operation =""
    for(let i=0;i<result.length;i++){
        if(result.charAt(i)!='+' && result.charAt(i)!='-' && result.charAt(i)!='*' && result.charAt(i)!='/'&& flag == true){
            first+=result.charAt(i)
        }
        if(result.charAt(i)=='+' || result.charAt(i)=='-' ||result.charAt(i)=='*' || result.charAt(i)=='/'){
            operation=result.charAt(i)
            flag=false
        }
        if(result.charAt(i)!='+' && result.charAt(i)!='-' && result.charAt(i)!='+*' &&  result.charAt(i)!='/'&& flag == false){
            second +=result.charAt(i)
        }
        
    }
    firstNum=Number(first)
    secondNum=Number(second)
    if(operation=='+'){
        resultEl.textContent=(firstNum+secondNum)
        flag=true
    }
    if(operation=='-'){
        resultEl.textContent=(firstNum-secondNum)
        flag=true

    }
    if(operation=='*'){
        resultEl.textContent=(firstNum*secondNum)
        flag=true
    }
    if(operation=='/'){
        resultEl.textContent=(firstNum/secondNum)
        flag=true
    }
})