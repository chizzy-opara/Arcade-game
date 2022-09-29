const player = document.querySelector("player");

document.onkeydown = function (event) {
    switch (event.keyCode) {
       case 37:
            moveLeft();
            break;
       case 38:
            moveUp();
            break;
       case 39:
            moveRight();
            break;
       case 40:
            moveDown();
            break;
    }
 };
function moveLeft() {
   player.style.left += "5px";
}
function moveRight(){
   player.style.right += "5px";
}
function moveDown(){
   player.style.bottom += "5px";
}
function moveUp(){
   player.style.top += "5px";
};