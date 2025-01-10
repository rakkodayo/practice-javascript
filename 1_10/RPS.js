function RPS(){
    const choices = ["gu","choki","pa"];

    
    let select = document.createElement("select");
    select.id = choices
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        option.id = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);

    let choicebutton = document.createElement("button")
    choicebutton.textContent = "ENTER";
    gameContainer.appendChild(choicebutton);
    let image = document.createElement("img");
    image.alt = "choice";
    image.style.width = "200px";
    image.style.height = "150px";
    
    let enemyimage = document.createElement("img");
    enemyimage.alt = "choice";
    enemyimage.style.width = "200px";
    enemyimage.style.height = "150px";
    choicebutton.addEventListener("click",function(){
        switch(select.value){
            case "gu":
                image.src ="https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14296-508x381.png"
                break;
            case "choki":
                image.src ="https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14297-508x381.png"
                break;
            case "pa":
                image.src ="https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14298-508x381.png"
                break;
            default:
                break;
        }
        let enemyhand = choices[Math.floor(Math.random() * choices.length)];
        
        switch(enemyhand){
            case "gu":
                enemyimage.src ="https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14296-508x381.png"
                break;
            case "choki":
                enemyimage.src ="https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14297-508x381.png"
                break;
            case "pa":
                enemyimage.src ="https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14298-508x381.png"
                break;
            default:
                break;
        }
    })
    gameContainer.appendChild(image);
    gameContainer.appendChild(enemyimage);

}