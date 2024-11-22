const gameSelector = document.getElementById("game-selector");
const gameContainer = document.getElementById("game-container");
gameContainer.innerHTML = "ゲームを選ぶとここに表示されます";
gameSelector.addEventListener("change",function(){
    gameContainer.innerHTML = "";
    switch (gameSelector.value) {
        case "none":
            gameContainer.textContent = "ゲームを選ぶとここに表示されます"
            break;
        case "click-counter":
            Clickcountergame();
            break;
        case "number-guess":
            Numberguessgame();
            break;
        case "RPS":
            RPS();
            break;
        default:
            break;
    }
})




