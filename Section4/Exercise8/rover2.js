// Mars Rover Kata: Iteration 2

var myRover = {

    position : [0, 0], // initialize in lower-left corner
    directions: ['north', 'east', 'south', 'west'],
    curDirection: 0, // initialize on north

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

            case 0:
                if (direction === 'f') {
                    if (this.position[1] + 1 <= 9) {
                        this.position[1]++;
                    } else {
                        this.position[1] = 0;
                    }
                } else {
                    if (this.position[1] - 1 > 0) {
                        this.position[1]--;
                    } else {
                        this.position[1] = 9
                    }
                }
                break;

            case 1:
                if (direction === 'f') {
                    if (this.position[0] + 1 <= 9) {
                        this.position[0]++;
                    } else {
                        this.position[0] = 0;
                    }
                } else {
                    if (this.position[0] - 1 > 0) {
                        this.position[0]--;
                    } else {
                        this.position[0] = 9;
                    }
                }
                break;

            case 2:
                if (direction === 'f') {
                    if (this.position[1] - 1 > 0) {
                        this.position[1]--;
                    } else {
                        this.position[1] = 9;
                    }
                } else {
                    if (this.position[1] + 1 <= 9) {
                        this.position[1]++;
                    } else {
                        this.position[1] = 0;
                    }
                }
                break;

            case 3:
                if (direction === 'f') {
                    if (this.position[0] - 1 > 0) {
                        this.position[0]--;
                    } else {
                        this.position[0] = 9;
                    }
                } else 
                    if (this.position[0] + 1 <= 9) {
                        this.position[0]++;
                    } else {
                        this.position = 0;
                    }
                break;
        }
    },

    invalidInput: function(msg) {
        console.log(msg);
    },

}

//myRover.move('rfffffffflfffffff'); // moves to [8, 7]
myRover.move('bbbbbbrf'); // move to [1, 4]
console.log(myRover.position);
