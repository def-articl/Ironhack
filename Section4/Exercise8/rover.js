// Mars Rover Kata: Iteration 1

var promptStr = 'Enter direction:  (N, S, E, W';
var invStr = 'Can\'t move there! Out of grid';

var myRover = {

    position : [0, 0],

    move: function(input) {
        switch(input.toLowerCase()) {
            case 'n':
                this.setPosition('n');
                break;
            case 's':
                this.setPosition('s');
                break;
            case 'e':
                this.setPosition('e');
                break;
            case 'w':
                this.setPosition('w');
                break;
        }
    },

    invalidInput: function(msg) {
        alert(msg);
        this.move(prompt(promptStr));
    },

    setPosition: function(direction) {
        switch(direction) {
            case 'n':
                if (this.position[1] >= 0 && (this.position[1] + 1) <= 9) {
                    this.position[1]++;
                    break;
                } else {
                    this.invalidInput(invStr);
                    break;
                }

            case 's':
                if ((this.position[1] - 1) >= 0 && this.position[1] <= 9) {
                    this.position[1]--;
                    break;
                } else {
                    this.invalidInput(invStr);
                    break;
                }

            case 'e':
                if (this.position[0] >= 0 && (this.position[0] + 1) <= 9) {
                    this.position[0]++;
                    break;
                } else {
                    this.invalidInput(invStr);
                    break;
                }

            case 'w':
                if ((this.position[0] - 1)>= 0 && this.position[0] <= 9) {
                    this.position[0]--;
                    break;
                } else {
                    this.invalidInput(invStr);
                    break;
                }
                
        }
    }

}

while (true) {
    var input = prompt(promptStr);
    myRover.move(input);
    console.log('You are now at position: ', myRover.position);
}

