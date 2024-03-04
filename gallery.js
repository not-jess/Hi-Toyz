var dropDown = document.querySelector(".navbutton");
var dropDownDiv = document.querySelector("#nav");
dropDown.addEventListener("click", function(){
dropDownDiv.classList.toggle('show-nav');
});

document.querySelector(".item").addEventListener("click", function(){
            this.document.getElementById('zoomed').innerHTML=document.querySelector(".item").innerHTML;
        });