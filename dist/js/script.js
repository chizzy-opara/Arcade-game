bugMove();
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

 function bugMove() {
    let id = null;
    const elem = document.getElementById("bug");
    let pos = 0;
    move();
    function move() {
        if (pos == 100) {
            pos =0;
        } else {
            pos = pos + .5;
            elem.style.left = pos + '%';
        }
        window.requestAnimationFrame(move);
    }

    // Enemy.prototype.update = function (dt) {
    //     this.x += this.speed * dt;
    
    //     if (this.x > 510) {
    //         this.x = -50;
    //         this.speed = 100 + Math.floor(Math.random() * 222);
    //     };
      
    //     if (player.x < this.x + 80 &&
    //         player.x + 80 > this.x &&
    //         player.y < this.y + 60 &&
    //         60 + player.y > this.y) {
    //         player.x = 202;
    //         player.y = 405;
    //     };
    // };


    // clearInterval(id);
    // id = setInterval(frame, 25);
    // function frame() {
    //     if (pos > 100) {
    //         elem.style.display = 'none';
    //     } else if(pos < 0) {
    //         elem.style.display = 'none';
    //     } else {
    //         elem.style.display = 'block';
    //     }
    //   if (pos == 100) {
    //     pos = -20;
    //     elem.style.left = "-20%";
    //   } else {
    //     pos++; 
    //     // elem.style.top = 100 + "px";
    //     elem.style.left = pos + "%"; 
    //   }
    // }
  }