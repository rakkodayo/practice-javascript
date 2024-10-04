function errorInput(){
const month = document.getElementById("month").value.trim();
const day = document.getElementById("day").value.trim();
if(month<1 || month>12){
    alert("適切な値じゃねぇよ")
    return
}
if(day<1 || month>31){
    alert("適切な値じゃねぇよ")
    return
}

console.log("month:",month,"day:",day)
}
const monthSelect = document.getElementById("month2")

monthSelectList();{
    for (let i=1;i<=12;i++){
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i + "月"; 
        monthSelect.appendChild("option");
    }
}
