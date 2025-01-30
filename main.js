    let count = 0;
    const gameContainer = document.getElementById("game-container");
    
    let button1 = document.createElement("button");
    button1.textContent = "+1ボタン";

    let button2 = document.createElement("button");
    button2.textContent = "+10ボタン";
    
    let button3 = document.createElement("button");
    button3.textContent = "RESET";

    let counter = document.createElement("p");
    counter.textContent = count;
    
    button1.addEventListener("click",function(){
        if (count < 100) {
            count++;
        }
        counter.textContent = count;
    })

    button2.addEventListener("click",function(){
        if (count < 100) {
            count = count + 10;
        }
        
        counter.textContent = count;
    })

    counter.addEventListener("click",function(){
        count = 0;
        counter.textContent = count;
    })

   
    
    gameContainer.appendChild(button1);
    gameContainer.appendChild(button2);
    //gameContainer.appendChild(button3);
    gameContainer.appendChild(counter);

    const randomNumber = Math.floor(Math.random()*1000)+1;
    let message = document.createElement("p");
    message.textContent = "";
    let input = document.createElement("input");
    input.type = "number"
    input.max = 1000
    input.min = 1
    input.placeholder = "好きな数字を入力してください (1-100)"
    let button = document.createElement("button");
    button.textContent = "確認";
    let k = 0;
    let kaunto = document.createElement("p");
    
    
    button.addEventListener("click",function(){
        k++;
        kaunto.textContent = k;
        const i = parseInt(input.value);
        if (randomNumber < i) {
            message.textContent = "もっと小さいよ"
        }else if (randomNumber > i) {
            message.textContent = "もっと大きいよ"
        }else if (randomNumber - 50 <= i && i < randomNumber || randomNumber < i && i <= randomNumber + 50){
            message.textContent = "惜しい"
        }else if (randomNumber === i) {
            message.textContent = "正解！"
        }
        
    })
    gameContainer.appendChild(input);
    gameContainer.appendChild(button);
    gameContainer.appendChild(kaunto);
    gameContainer.appendChild(message);
    


