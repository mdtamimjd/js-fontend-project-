function getId(id){
    return document.getElementById(id);
}
function getValue(id){
    return document.getElementById(id).value;
}
function addHide(id){
    return getId(id).classList.add("hidden")
}
function showAndHide(id){
    return getId(id).classList.toggle("hidden");
}

let countNumber = 0;
function countNumberOne(){
    return countNumber = (countNumber + 1);
}