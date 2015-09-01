// Mars Rover Kata: Iteration 2 INCLUDING BONUS

var myRover = {

    position : [0, 0], // initialize in lower-left corner
    directions: ['north', 'east', 'south', 'west'],
    curDirection: 0, // initialize on north
    obstacles : [[0, 9], [4, 3]], // coordinates of obstacles
    stopping: false, // terminate instruction list when hitting obstacle

    // just checks for valid input, discards anything but `fblr`
    instructionValidator: function(input) {
        validInstructions = 'fblr'; // f-front, b-back, l-left, r-right
        instructionList = [];

        for (var i = 0; i < input.length; i++) {
            if ( validInstructions.indexOf(input[i]) === -1 ) {
                this.invalidInput(input[i] + ' is not valid input!');
            } else {
                instructionList.push(input[i]);
            }
        }

        return instructionList;
    },

    move: function(input) {
        instructions = this.instructionValidator(input);

        for (var i = 0; i < instructions.length; i++) {

            // if you remove this condition and `stopping` property
            // you can keep processing instruction list even after
            // hitting obstacle
            if (this.stopping === false) {

                switch( instructions[i] ) {
                    case 'r':
                        this.rotate('r');
                        break;

                    case 'l':
                        this.rotate('l');
                        break;

                    case 'f':
                        this.makeMove('f');
                        break;

                    case 'b':
                        this.makeMove('b');
                        break;

                }
            }
        }
    },

    rotate: function(direction) {
        if (direction === 'r') {
            if (this.curDirection + 1 <= 3) {
                this.curDirection++;
                console.log('turning to: ', this.directions[this.curDirection]);
            } else {
                this.curDirection = 0;
                console.log('turning to: ', this.directions[this.curDirection]);
            }
        } else if (direction === 'l') {
            if (this.curDirection - 1 >= 0) {
                this.curDirection--;
                console.log('turning to: ', this.directions[this.curDirection]);
            } else {
                this.curDirection = 3;
                console.log('turning to: ', this.directions[this.curDirection]);
            }
        }
    },

    makeMove: function(direction) {
        
        switch (this.curDirection) {

            case 0: // facing 'north'
                // are we going forward?
                if (direction === 'f') {
                    // am I getting toward top edge on Y axis?
                    if (this.position[1] + 1 <= 9) {
                        // is the tile I'm about to jump to occupied by obstacle?
                        if (!this.detectObstacles(false, this.position[1] + 1)) {
                            // if not, let's make the move
                            this.position[1]++;
                        // if it is, return undefined and do not make the movement
                        } else {
                            break;
                        }
                    // am I getting toward bottom edge on Y axis?
                    } else {
                        // is the tile I'm about to jump to occupied by obstacle?
                        if (!this.detectObstacles(false, 0)) {
                            // if not wrap around the grid
                            this.position[1] = 0;
                        // if the obstacle is in the way, return undefined and 
                        // do not make the movement
                        } else {
                            break;
                        }
                    }
                

                // are we going backward?
                } else if (direction === 'b') {
                    if (this.position[1] - 1 > 0) {
                        if (!this.detectObstacles(false, this.position[1] - 1)) {
                            this.position[1]--;
                        } else {
                            break;
                        }
                    } else {
                        if (!this.detectObstacles(false, 9)) {
                            this.position[1] = 9;
                        } else {
                            break;
                        }
                    }
                }
                break;

            case 1: // facing 'east'
                if (direction === 'f') {
                    // getting to the rightmost edge of X axis
                    if (this.position[0] + 1 <= 9) {
                        if (!this.detectObstacles(true, this.position[0] + 1)) {
                            this.position[0]++;
                        } else {
                            break;
                        }
                    // getting to the leftmost edge of X axis
                    } else {
                        if (!this.detectObstacles(true, 0)) {
                            this.position[0] = 0;
                        } else {
                            break;
                        }
                    }

                } else if (direction === 'b') {
                    // same but backwards
                    if (this.position[0] - 1 > 0) {
                        if (!this.detectObstacles(true, this.position[0] = 1)) {
                            this.position[0]--;
                        } else {
                            break;
                        }
                    } else {
                        if (!this.detectObstacles(true, 9)) {
                            this.position[0] = 9;
                        } else {
                            break;
                        }
                    }
                }
                break;

            case 2: // facing 'south'
                if (direction === 'f') {
                    if (this.position[1] - 1 > 0) {
                        if (!this.detectObstacles(false, this.position[1] - 1)) {
                            this.position[1]--;
                        } else {
                            break;
                        }
                    } else {
                        if (!this.detectObstacles(false, 9)) {
                            this.position[1] = 9;
                        } else {
                            break;
                        }
                    }

                } else if (direction === 'b'){
                    if (this.position[1] + 1 <= 9) {
                        if (!this.detectObstacles(false, this.position[1] + 1)) {
                            this.position[1]++;
                        } else {
                            break;
                        }
                    } else {
                        if (!this.detectObstacles(false, 0)) {
                            this.position[1] = 0;
                        } else {
                            break;
                        }
                    }
                }
                break;

            case 3: // facing 'west'
                if (direction === 'f') {
                    if (this.position[0] - 1 > 0) {
                        if (!this.detectObstacles(true, this.position[0] - 1)) {
                            this.position[0]--;
                        } else {
                            break;
                        }
                    } else {
                        if (!this.detectObstacles(true, 9)) {
                            this.position[0] = 9;
                        } else {
                            break;
                        }
                    }
                } else if (direction === 'b') {
                    if (this.position[0] + 1 <= 9) {
                        if (!this.detectObstacles(true, this.position[0] + 1)) {
                            this.position[0]++;
                        } else {
                            break;
                        }
                    } else {
                        if (!this.detectObstacles(true, 0)) {
                            this.position = 0;
                        } else {
                            break;
                        }
                    }
                break;
                }
        }
    },

    invalidInput: function(msg) {
        console.log(msg);
    },

    detectObstacles: function(isPositionX, futurePosition) {

        if (isPositionX === false) {
            for (var i = 0; i < this.obstacles.length; i++) {
                if (this.obstacles[i][0] === this.position[0] && this.obstacles[i][1] === futurePosition) {
                    console.log('Obstacle on position', this.obstacles[i], '.', 'Terminating...');
                    // terminate the movement do not process additional moves
                    this.stopping = true;
                    return true;
                }
            }
        } 
        
        if (isPositionX === true) {
            for (var i = 0; i < this.obstacles.length; i++) {
                if (this.obstacles[i][0] === futurePosition && this.obstacles[i][1] === this.position[1]) {
                    console.log('Obstacle on position', this.obstacles[i], '.', 'Terminating...');
                    this.stopping = true;
                    return true;
                }
            }
        }
    },

}

//myRover.curDirection = 0;
//// hits obstacle and stops terminating movement
//// observe that it does not go backwards (`b` in the instruction list)
//myRover.move('fffffffffb'); 
//console.log('Current position: ',  myRover.position);


//// another obstacle test - testing 'east'
//myRover.curDirection = 0;
//myRover.position[0] = 0;
//myRover.position[1] = 0;
//// turn right, go to [0, 9] then turn left go to [9, 9]
//// then turn right and go forward, wrap around the grip 
//// to hit obstacle at [0, 9] and return to [9, 9]
//myRover.move('rffffffffflfffffffffrf');
//console.log('Current position: ',  myRover.position);

// another obstacle test - backing up into obstacle (south)
//myRover.curDirection = 0;
//myRover.position[0] = 0;
//myRover.position[1] = 0;
//myRover.move('rfffrfffffflflb');
//console.log('Current position: ',  myRover.position);

// another obstacle test, same obstacle like the one before
// but approaching from west
myRover.curDirection = 0;
myRover.position[0] = 0;
myRover.position[1] = 0;
myRover.move('rffffflffflf')
console.log('Current position: ',  myRover.position);
