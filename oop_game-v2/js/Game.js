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
        },
     ];
		this.activePhrase = null;
    }
    // Show Random Phrase
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
        let liHide = document.querySelectorAll('li[class~="hide"]');
		if (liHide.length === 0) {
			return true;
			} else {
				return false;
			};
		};

 


        removeLife(){

            this.missed += 1;
            const life = document.querySelector('img[src="images/liveHeart.png"]');
            life.src="images/lostHeart.png";
            
            if( this.missed === 5 ){
                this.gameOver(false);
            }
    
        }


	gameOver(gameWon) {
        // Select 'h1#game-over-message'
        const gameOver = document.querySelector('h1#game-over-message');

        // Select 'h2.title'
        const title = document.querySelector('h2.title');

        // Select 'div#overlay"
        const divOverlay = document.querySelector('div#overlay');
        const letters = document.querySelectorAll('ul li');
        const buttons = document.querySelectorAll('button');
        const lostLifes = document.querySelectorAll('img[src="images/lostHeart.png"]');

        // Condition check, if 'gameWon' parameter = true, 
        if (gameWon === true) {
            gameOver.innerHTML = 'You win! Well done!';
            gameOver.style.display = 'block';
            gameOver.style.justifyContent = 'center';
            divOverlay.style.display = 'block';
            divOverlay.setAttribute('class', 'win');
            title.classList.remove('slide-in'); //removes slide animation 

        } 
        
          
        
        if (this.missed === 5) {
            gameOver.innerHTML = 'Sorry, better luck next time!';
            gameOver.style.display = 'block';
            gameOver.style.justifyContent = 'center';
            divOverlay.style.display = 'block';
            divOverlay.setAttribute('class', 'lose');
            title.classList.remove('slide-in'); //removes slide animation
        };

        letters.forEach( letter => {
            letter.remove();
        });

        buttons.forEach( button => {
            button.disabled = false;
            button.className = 'key';
        });
        
        lostLifes.forEach( life => {
            life.src="images/liveHeart.png";
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

    }


}

