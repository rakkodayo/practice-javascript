function RPS(){
    const choices = ["gu","choki","pa","muteki"];


    
    let select = document.createElement("select");
    choices.forEach(choices => {
        let option = document.createElement("option");
        option.value = choices;
        option.textContent = choices;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);

    let image = document.createElement("img");
    image.alt = "choice";
    image.style.width = "200px";
    image.style.height = "150px";
    image.src ="https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14296-508x381.png"
    
    gameContainer.appendChild(image);

}