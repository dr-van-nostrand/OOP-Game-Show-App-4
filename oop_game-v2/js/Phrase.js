/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 // Inside the Phrase.js file, declare the Phrase class.
class Phrase {

// Create a constructor method inside each class.
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {

        let nul = document.querySelector('#phrase ul');
        nul.innerHTML = '';
        let letters = this.phrase.split('');

        letters.forEach(letter => {
        let li = document.createElement('LI');
        li.innerHTML = letter;
        nul.appendChild(li);

        if(letter === ' ') {
            li.className = "space";
            } else {
            li.className = "hide letter";
            }

        });
    }  

    checkLetter(letter){
        // Store characters from random phrase inside array
        let gameLetters = this.phrase.split('');
        console.log(gameLetters);
        // Return true or false if letter parameter matches character in 'charArray'
        let gameLetters2 = this.phrase.split();
        console.log(gameLetters2);
        return gameLetters.includes(letter);
    }
    checkLetterAta(letter){
        // Store characters from random phrase inside array
        if (this.phrase.search(letter) != -1 ){
            return true;
        }
        return false;
    }

    showMatchedLetter(letter){
        // Select ALL letter 'li' elements and store in variable 
        let liLetters = document.querySelectorAll('li');
        liLetters.forEach(li => {

            if (li.innerHTML === letter) {
                li.setAttribute('class', 'show');
            };
        });    
    };

    }

