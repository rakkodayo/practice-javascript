function Clickcountergame(){
    let count = 0;
    
    let button = document.createElement("button");
    button.textContent = "+1ボタン";
    
    let button1 = document.createElement("button");
    button1.textContent = "+10ボタン";
    
    let button2 = document.createElement("button");
    button2.textContent = "+100ボタン";
    let counter = document.createElement("p");
    counter.textContent = count;
    button.addEventListener("click",function(){
        count++;
        counter.textContent = count;
    })
    button1.addEventListener("click",function(){
        count = count + 10;
        counter.textContent = count;
    })
    button2.addEventListener("click",function(){
        count = count + 100;
        counter.textContent = count;
    })
    gameContainer.appendChild(button);
    gameContainer.appendChild(button1);
    gameContainer.appendChild(button2);
    gameContainer.appendChild(counter);

}