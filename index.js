let buttonEle = document.getElementById("button");

buttonEle.onclick = function(){
    buttonEle.textContent = "Loading..."
    setTimeout(function(){
        buttonEle.textContent = "Show loading for 1 sec";
    },1000)
}