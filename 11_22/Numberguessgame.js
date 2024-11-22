function Numberguessgame(){
    const randomNumber = Math.floor(Math.random()*100)+1;
    
    let message = document.createElement("p");
    let input = document.createElement("input");
    input.type = "number"
    input.max = 100
    input.min = 1
    input.placeholder = "好きな数字を入力してください (1-100)"
    let button = document.createElement("button");
    button.textContent = "予想";
    
    
    button.addEventListener("click",function(){
        const i = parseInt(input.value);
        if (randomNumber < i) {
            message.textContent = "もっと小さいよ"
        }else if (randomNumber > i) {
            message.textContent = "もっと大きいよ"
        }else if (randomNumber === i) {
            message.textContent = "正解！"
        }
        
    })
    gameContainer.appendChild(input);
    gameContainer.appendChild(button);
    gameContainer.appendChild(message);
}