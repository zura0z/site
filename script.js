document.querySelector(".fa-bars").addEventListener("click", togle);
function togle(){
    var x = document.getElementById("list2");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
      x.style.marginBottom = "50px";
    }
}
window.addEventListener('resize', fun);
function fun(){
if(window.innerWidth>760){
    var x = document.getElementById("list2");
    x.style.display = "none";
}
}