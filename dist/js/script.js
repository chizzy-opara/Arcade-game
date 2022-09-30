// const player = document.querySelector("player");
class Player {
    constructor(id, row = 5, col = 2) {
        this.element = document.getElementById(id);
        this.row = row;
        this.col = col;
        this.element.setAttribute('data-row', this.row);
        this.element.setAttribute('data-col', this.col);
        this.element.setAttribute('data-player-active', 'yes');
    }

    moveLeft() {
        if(this.col === 0) {
            // console.warn('you have reached the bottom')
            return;
        }

        this.col = this.col - 1;
        this.element.setAttribute('data-col', this.col);
    }
    moveUp() {
        if(this.row === 0) {
            // console.warn('you have reached the bottom')
            return;
        }

        this.row = this.row - 1;
        this.element.setAttribute('data-row', this.row);
    }
    moveRight() {
        if(this.col === 4) {
            // console.warn('you have reached the bottom')
            return;
        }

        this.col = this.col + 1;
        this.element.setAttribute('data-col', this.col);
    }
    moveDown() {
        if(this.row === 5) {
            // console.warn('you have reached the bottom')
            return;
        }

        this.row = this.row + 1;
        this.element.setAttribute('data-row', this.row);
    }
    


}

const charBoy = new Player('player');
document.onkeydown = function (event) {
    switch (event.keyCode) {
       case 37:
            charBoy.moveLeft();
            break;
       case 38:
            charBoy.moveUp() 
            break;
       case 39:
            charBoy.moveRight();
            break;
       case 40:
            charBoy.moveDown();
            break;
    }
 };