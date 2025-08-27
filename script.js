let img = document.getElementById("img")
let fansound = document.getElementById("fansound")
function myfunon() {
    img.style.animationDuration = "3s"
    fansound.play()
}
function myfunof() {
    img.style.animationDuration = "0s"
    fansound.pause()
    sound.currentTime = 0
}
function myfun1() {
    img.style.animationDuration = "1s"
    fansound.play()
}
function myfun2() {
    img.style.animationDuration = "0.5s"
    fansound.play()
}
function myfun3() {
    img.style.animationDuration = "0.1s"
    fansound.play()
}