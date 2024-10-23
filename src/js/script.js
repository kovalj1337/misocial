const bord = document.querySelector(".bord"),
    cancel = document.querySelector(".cancel-burger"),
    bgcBlack = document.querySelector(".bgc-black"),
    nav = document.querySelector(".navigation.light nav")
bord.addEventListener("click",function(){
    nav.style.left = "0"
    bgcBlack.style.right = "-60%"
})
cancel.addEventListener("click", function(){
    nav.style.left = "-100%"
    bgcBlack.style.right = "-100%"
})