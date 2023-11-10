var cr = document.querySelector("#box")
var blur = document.querySelector("#blur")
document.addEventListener("mousemove",function(dets){
    cr.style.left = dets.x - 10 + "px"
    cr.style.top = dets.y - 10 + "px"
    blur.style.left = dets.x - 30 + "px"
    blur.style.top = dets.y - 30 + "px"
})
