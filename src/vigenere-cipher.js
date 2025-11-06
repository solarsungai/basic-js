const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const A = 'A'.charCodeAt(0);
    const messageArr = message.toUpperCase().split('');
    const keyArr = key.toUpperCase().split('');
    let letterCount = 0;

    const result = messageArr.reduce((acc, char) => {
      const code = char.charCodeAt(0);
      if (code >= A && code <= A + 25) {
        const keyCode = keyArr[letterCount % keyArr.length].charCodeAt(0) - A;
        const newChar = String.fromCharCode(((code - A + keyCode) % 26) + A);
        letterCount++;
        return acc + newChar;
      } else {
        return acc + char;
      }
    }, '');

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const A = 'A'.charCodeAt(0);
    const msgArr = encryptedMessage.toUpperCase().split('');
    const keyArr = key.toUpperCase().split('');
    let letterCount = 0;

    const result = msgArr.reduce((acc, char) => {
      const code = char.charCodeAt(0);
      if (code >= A && code <= A + 25) {
        const keyCode = keyArr[letterCount % keyArr.length].charCodeAt(0) - A;
        const newChar = String.fromCharCode(((code - A - keyCode + 26) % 26) + A);
        letterCount++;
        return acc + newChar;
      } else {
        return acc + char;
      }
    }, '');

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
