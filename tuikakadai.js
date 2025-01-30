const keisan = document.getElementById("keisan");
let a = 0;
let message = document.createElement("p");
message.textContent = "";
let input1 = document.createElement("input");
input1.type = "number";
let input2 = document.createElement("input");
input2.type = "number";
let button1 = document.createElement("button");
button1.textContent = "+";
button.addEventListener("click",function(){
    const i = parseInt(input1.value);
    const j = parseInt(input2.value);
    a = i + j;
    message.textContent = a;
})
let button2 = document.createElement("button");
button2.textContent = "-";
button.addEventListener("click",function(){
    
    const i = parseInt(input1.value);
    const j = parseInt(input2.value);
    a = i - j;
    message.textContent = a;
})
let button3 = document.createElement("button");
button3.textContent = "×";
button.addEventListener("click",function(){
   
    const i = parseInt(input1.value);
    const j = parseInt(input2.value);
    a = i * j;
    message.textContent = a;
})
let button4 = document.createElement("button");
button4.textContent = "÷";
button.addEventListener("click",function(){
  
    const i = parseInt(input1.value);
    const j = parseInt(input2.value);
    a = Math.floor(i / j);
    message.textContent = a;
})
keisan.appendChild(message);
keisan.appendChild(input1);
keisan.appendChild(input2);
keisan.appendChild(button1);
keisan.appendChild(button2);
keisan.appendChild(button3);
keisan.appendChild(button4);
