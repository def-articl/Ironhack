// Mars Rover Kata: Iteration 2 INCLUDING BONUS + HARDCORE EXERCISE
// this one enables multiple rovers, not just one

function myRover(playerID, startingPosition) {

    this.playerId = playerID; // unique player ID (passed param.)
    this.position = startingPosition; // tracks player's position (starting point as param.) 
    this.directions = ['north', 'east', 'south', 'west'];
    this.curDirection = 0; // initialize on north
    this.obstacles = [[0, 9], [4, 3]]; // coordinates of obstacles
    this.otherPlayers = {}, // tracks other players {id: [posX, posy]}
    this.stopping = false; // terminate instruction list when hitting obstacle

    // just checks for valid input, discards anything but `fblr`
    this.instructionValidator = function(input) {
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
    };

    // will find other players (not matching our playerId)
    this.findOtherPlayers = function() {
        for (var i = 0; i < playerList.length; i++) {
            if (playerList[i].playerId === this.playerId) {
                continue;
            } else {
                console.log('Rover ID ', this.playerId, ' detected player ID ', 
                        playerList[i].playerId, ' on position ', 
                        playerList[i].position);
                // add them to `otherPlayers` property
                this.otherPlayers[playerList[i].playerId] = playerList[i].position;
            }
        }
    };

    this.move = function(input) {
        
        // have to make sure where other players are before we move
        this.findOtherPlayers();

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
    };

    this.rotate = function(direction) {
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
    };

    this.makeMove = function(direction) {
        
        switch (this.curDirection) {

            case 0: // facing 'north'
                // are we going forward?
                if (direction === 'f') {
                    // am I getting toward top edge on Y axis?
                    if (this.position[1] + 1 <= 9) {
                        // is the tile I'm about to jump to occupied by obstacle?
                        this.detectObstacles(false, this.position[1] + 1);
                        if (!this.stopping) {
                            // if not, let's make the move
                            this.position[1]++;
                        // if it is, return undefined and do not make the movement
                        } else {
                            break;
                        }
                    // am I getting toward bottom edge on Y axis?
                    } else {
                        // is the tile I'm about to jump to occupied by obstacle?
                        this.detectObstacles(false, 0);
                        if (!this.stopping) {
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
                        this.detectObstacles(false, this.position[1] - 1);
                        if (!this.stopping) {
                            this.position[1]--;
                        } else {
                            break;
                        }
                    } else {
                        this.detectObstacles(false, 9);
                        if (!this.stopping) {
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
                        this.detectObstacles(true, this.position[0] + 1);
                        if (!this.stopping) {
                            this.position[0]++;
                        } else {
                            break;
                        }
                    // getting to the leftmost edge of X axis
                    } else {
                        this.detectObstacles(true, 0);
                        if (!this.stopping) {
                            this.position[0] = 0;
                        } else {
                            break;
                        }
                    }

                } else if (direction === 'b') {
                    // same but backwards
                    if (this.position[0] - 1 > 0) {
                        this.detectObstacles(true, this.position[0] = 1);
                        if (!this.stopping) {
                            this.position[0]--;
                        } else {
                            break;
                        }
                    } else {
                        this.detectObstacles(true, 9);
                        if (!this.stopping) {
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
                        this.detectObstacles(false, this.position[1] - 1);
                        if (!this.stopping) {
                            this.position[1]--;
                        } else {
                            break;
                        }
                    } else {
                        this.detectObstacles(false, 9);
                        if (!this.stopping) {
                            this.position[1] = 9;
                        } else {
                            break;
                        }
                    }

                } else if (direction === 'b'){
                    if (this.position[1] + 1 <= 9) {
                        this.detectObstacles(false, this.position[1] + 1);
                        if (!this.stopping) {
                            this.position[1]++;
                        } else {
                            break;
                        }
                    } else {
                        this.detectObstacles(false, 0);
                        if (!this.stopping) {
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
                        this.detectObstacles(true, this.position[0] - 1);
                        if (!this.stopping) {
                            this.position[0]--;
                        } else {
                            break;
                        }
                    } else {
                        this.detectObstacles(true, 9);
                        if (!this.stopping) {
                            this.position[0] = 9;
                        } else {
                            break;
                        }
                    }
                } else if (direction === 'b') {
                    if (this.position[0] + 1 <= 9) {
                        this.detectObstacles(true, this.position[0] + 1);
                        if (!this.stopping) {
                            this.position[0]++;
                        } else {
                            break;
                        }
                    } else {
                        this.detectObstacles(true, 0);
                        if (!this.stopping) {
                            this.position = 0;
                        } else {
                            break;
                        }
                    }
                break;
                }
        }
    };

    this.invalidInput = function(msg) {
        console.log(msg);
    };

    this.detectObstacles = function(isPositionX, futurePosition) {

        // temporarily add other players' coordinates to `this.obstacles` property
        var tempIndices = [];
        for (plId in this.otherPlayers) {
            var tempPosition = this.otherPlayers[plId];
            this.obstacles.push(tempPosition);
            tempIndices.push(this.obstacles.indexOf(tempPosition));
        }

        for (var i = 0; i < this.obstacles.length; i++) {
            if (isPositionX === false) {
                if (this.obstacles[i][0] === this.position[0] && this.obstacles[i][1] === futurePosition) {
                    console.log('Obstacle on position', this.obstacles[i], '.', 'Terminating...');
                    // terminate the movement do not process additional moves
                    this.stopping = true;
                }
            } else if (isPositionX === true) {
                if (this.obstacles[i][0] === futurePosition && this.obstacles[i][1] === this.position[1]) {
                    console.log('Obstacle on position', this.obstacles[i], '.', 'Terminating...');
                    this.stopping = true;
                }
            } else {
                this.stopping = false;
            }
        }

        for (var i = 0; i < tempIndices.length; i++) {
            this.obstacles.splice(tempIndices[i], 1);
        }

        
    };

}

var roverOne = new myRover(1, [0, 0]);
var roverTwo = new myRover(2, [5, 8]);
var playerList = [roverOne, roverTwo];

console.log("Rover One ID: ",roverOne.playerId, "Rover Two ID: ", roverTwo.playerId);
console.log("Starting positions: ID 1 ", roverOne.position, " ID 2 ", roverTwo.position);

console.log('Testing moving around ...')
roverOne.move('ffrffflf');
console.log('Rover One position: ', roverOne.position);
console.log('Rover Two position: ', roverTwo.position);

// checking if regular obstacle still works
console.log('Let\'s try and hit regular obstacle at [4, 3]');
roverOne.move('rf'); // this will hit obstacle at [4, 3]
console.log('Rover One position: ', roverOne.position);
console.log('Rover Two position: ', roverTwo.position);

// let's bump into Rover Two
console.log('Now we will try to bump into Rover Two');
roverOne.stopping = false; // manually set Rover to move so we can start going
roverOne.move('lfffffrff'); // this will bump into Rover Two
console.log('Rover One position: ', roverOne.position);
console.log('Rover Two position: ', roverTwo.position);
roverOne.stopping = false; // let's get it moving again

// let's add another rover!
console.log('Creating Rover Three!');
var roverThree = new myRover(3, [9, 9]);
playerList.push(roverThree); // let's update the player list as well
console.log("Rover One ID: ",roverOne.playerId, "Rover Two ID: ", 
        roverTwo.playerId, "Rover Three ID: ", roverThree.playerId);
console.log("Starting positions: ID 1 ", roverOne.position, " ID 2 ", 
        roverTwo.position, " ID3 ", roverThree.position);

// bump into obstacle on [0,9]
console.log('Let\'s hit regular obstacle on [0, 9]');
roverThree.move('rfffffffff');
console.log('Rover Three position: ', roverThree.position);

// bump into Rover One
console.log('Rover Three will bump into Rover One.');
roverThree.stopping = false;
console.log('Rover One position: ', roverOne.position);
roverThree.move('lffffffffflfffrflfflf'); // it hits Rover one on [4,8]
console.log('Rover Three position: ', roverThree.position);

// finally move Rover Two as well
console.log('Moving Rover Two as well');
roverTwo.move('blff');
console.log('Rover One position: ', roverOne.position);
console.log('Rover Two position: ', roverTwo.position);
console.log('Rover Three position: ', roverThree.position);
