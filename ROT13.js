// Simple ROT13 encryption and decryption program. Created by Kristopher Pepper, in 2022.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];

console.log("--- ROT13 Encryption ---\n");
ROT13();

function ROT13() {
  const message = [];

  readline.question('Create cipher = c | Decrypt cipher = d | Exit = e \n', userPrompt => {
    if (userPrompt == 'c') {
      readline.question('\nEnter text: ', enteredString => {
        const stringArray = enteredString.split("");
        stringArray.forEach(encryptMessage);

        function encryptMessage(item, index) {
          let letterNotFound = true;
          for (let i = 0; i < 40; i++) {
            if (item == alphabetLetters[i] || item.toLowerCase() == alphabetLetters[i]) {
              message.push(alphabetLetters[i + 13]);
              letterNotFound = false;
            }
          }
          if (letterNotFound == true) {
            message.push(item);
          }
        }
        console.log('Encrypted text: ' + message.join('') + '\n');
        ROT13();
      });
    } else if (userPrompt == 'd') {
      readline.question('\nEnter cipher: ', enteredCipher => {
        const stringArray = enteredCipher.split("");
        stringArray.forEach(decryptText);

        function decryptText(item, index) {
          let letterNotFound = true;
          for (let i = 0; i < 40; i++) {
            if (item == alphabetLetters[i] || item.toLowerCase() == alphabetLetters[i]) {
              message.push(alphabetLetters[i - 13]);
              letterNotFound = false;
            }
          }
          if (letterNotFound == true) {
            message.push(item);
          }
        }
        console.log('Decrypted text: ' + message.join('') + '\n');
        ROT13();
      });
    } else if (userPrompt == 'e') {
      readline.close();
      return;
    }
    else {
      ROT13();
    }
  });
}