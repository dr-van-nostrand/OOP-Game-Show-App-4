/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Inside the Game.js file, declare the Game class.
class Game {
	// Create a constructor method inside each class.
	constructor() {
		this.missed = 0;
		this.phrases = [{
			phrase: "life is like a box of chocolates"
		}, {
			phrase: "there is no trying"
		}, {
			phrase: "may the force be with you"
		}, {
			phrase: "you have to see the matrix for yourself"
		}, {
			phrase: "you talking to me"
		},{
			phrase: "hitler was a sensitive man"
		}, ];
		this.activePhrase = null;
    }
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
	};
	startGame() {
		document.getElementById('overlay').style.display = 'none';
		const rPh = game.getRandomPhrase(); 
		const ph = new Phrase(rPh.phrase); 
		ph.addPhraseToDisplay();
		this.activePhrase = ph;
	};



	checkForWin(){
		// Select phrase's hidden li elements and store in variable
		let liHide = document.querySelectorAll('li[class~="hide"]');
		// Check condition: if there are NO hidden li elements, return true, else false
		if (liHide.length === 0) {
			return true;
			} else {
				return false;
			};
		};

	removeLife(){
		let heart = document.querySelectorAll('img');
        if (heart[this.missed].src = 'images/liveHeart.png') {
            heart[this.missed].src = 'images/lostHeart.png';
            
            // Increase value of 'missed' property by 1
            this.missed += 1;
        };
        if (this.missed === 5) {
            game.gameOver(false);
        };
    };


	gameOver(gameWon) {
        // Select 'h1#game-over-message'
        const gameOver = document.querySelector('h1#game-over-message');

        // Select 'h2.title'
        const title = document.querySelector('h2.title');

        // Select 'div#overlay"
        const divOverlay = document.querySelector('div#overlay');

        // Condition check, if 'gameWon' parameter = true, 
        if (gameWon === true) {
            gameOver.innerHTML = 'You win! Well done!';
            gameOver.style.display = 'block';
            gameOver.style.justifyContent = 'center';
            divOverlay.style.display = 'block';
            divOverlay.setAttribute('class', 'win');
            title.classList.remove('slide-in'); //removes slide animation 

        } else {
            gameOver.innerHTML = 'Sorry, better luck next time!';
            gameOver.style.display = 'block';
            gameOver.style.justifyContent = 'center';
            divOverlay.style.display = 'block';
            divOverlay.setAttribute('class', 'lose');
            title.classList.remove('slide-in'); //removes slide animation
        };

        // Add click event listener to reset button
        resetButton.addEventListener('click', (event) => {
            // Call reset game FUNCTION
            resetGame();
            game = new Game();
            game.startGame();
        });
	};

	
	handleInteraction(button){
		button.disabled = true;
    

        if( this.activePhrase.checkLetter(button.textContent) === false ){
            button.className = 'wrong';
            this.removeLife();
        } else {
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter( button.textContent );
            this.checkForWin();
        }

        if( this.checkForWin() === true ){
            this.gameOver(true);
        }

	};
}

