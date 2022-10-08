class Player {
    row = 5;
    col = 2;

    constructor (player_id) {
        this.img = document.getElementById(player_id);
    }
}

class Bug {
    constructor (row, col, speed) {
        this.row = row;
        this.col = col;
        this.speed = speed;
        this.img = document.getElementById('bug');
    }
}

class Game {
    constructor(player) {
        // create player object
        this.player = player;

        this.bugs = [];
        
        for(let i = 0; i < 3; i++) {
            const bug = new Bug(i+1, -1, this.randomSpeed());
            this.bugs.push(bug);
        }

        // build game board
        const app = document.getElementById('app');
        const canvas = document.createElement('canvas');
        canvas.width = 500;
        canvas.height = 600;
        app.append(canvas);
        this.ctx = canvas.getContext('2d');
        document.addEventListener('keyup', (e) => {
            var allowedKeys = {
                37: 'left',
                38: 'up',
                39: 'right',
                40: 'down'
            };
        
            this.handleInput(allowedKeys[e.keyCode]);
        });
    }

    randomSpeed() {
        const speeds = [0.02, 0.03, 0.05]
        const randomIndex = Math.floor(Math.random() * 3);

        return speeds[randomIndex];
    }

    handleInput(dir) {
        if (dir === 'up') {
            if (this.player.row > 0) {
                -- this.player.row;
            } 
            if (this.player.row <= 0) {
                //player is at the top
                window.setTimeout(() => {
                    window.alert('You win!');
                    this.player.col = 2;
                    this.player.row = 5;
                }, 750);
            }
        } else if (dir === 'down') {
            if (this.player.row < 5) {
                ++ this.player.row;
            }
        } else if (dir === 'left') {
            if (this.player.col > 0) {
                -- this.player.col;
            }
        } else if (dir === 'right') {
            if (this.player.col < 4) {
                ++ this.player.col;
            }
        }
    }

    /**[]
     * Creates different bugs and a player and starts the game.
     */
    start() {
        const render = () => {
            this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
            this.drawGameBoard();
            
            this.drawImage(this.player.img, this.player.row, this.player.col);
            this.bugs.forEach((bug) => {
                bug.col = bug.col + bug.speed;
                if (bug.col > 5) {
                    bug.col = -1;
                    bug.speed = this.randomSpeed();
                }
                this.drawImage(bug.img, bug.row, bug.col);

                // collision
                const bugRow = Math.floor(bug.row);
                const bugCol = Math.floor(bug.col);
                const playerRow = Math.floor(this.player.row);
                const playerCol = Math.floor(this.player.col);

                if (bugRow === playerRow && bugCol === playerCol) {
                    // player has collided with bug
                    this.player.col = 2;
                    this.player.row = 5;
                    window.alert('Collision happened! You loose!');
                }
            });
            window.requestAnimationFrame(render);
        }
        window.requestAnimationFrame(render);
    }

    drawGameBoard() {
        // add 5 water-block.png images at row 0
        const water_block = document.getElementById('water-block');
        for (let index = 0; index < 5; index++) {
            // index is the column
            this.drawImage(water_block, 0, index);
        }

        const stone_block = document.getElementById('stone-block');
        for (let index = 0; index < 5; index++) {
            this.drawImage(stone_block, 1, index);
        }
        for (let index = 0; index < 5; index++) {
            this.drawImage(stone_block, 2, index);
        }
        for (let index = 0; index < 5; index++) {
            this.drawImage(stone_block, 3, index);
        }

        const grass_block = document.getElementById('grass-block');
        for (let index = 0; index < 5; index++) {
            this.drawImage(grass_block, 4, index);
        }
        for (let index = 0; index < 5; index++) {
            this.drawImage(grass_block, 5, index);
        }
    }

    /**
     * Draw an image at a specific row and col on the game board
     */
    drawImage(img, row, col) {
        const height = 83;
        const width = 100;
        this.ctx.drawImage(img, col * width, row * height);
    }
}

window.addEventListener('DOMContentLoaded', function () {
    const player = new Player('char-boy');
    const game = new Game(player);
    game.start();
});