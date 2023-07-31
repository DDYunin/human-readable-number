module.exports = function toReadable (number) {
  // Уникальные имена - 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  // 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  // 30, 40, 50, 60, 70, 80, 90, 100
  const numbers = {
    '1': ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    '2': [['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ],
    '3': 'hundred'
  }

  const arrayDigits = String(number).split('');
  return (arrayDigits.reduce((object, digit) => {
    if (object.currentIndex === 3) {
        object.resultStringNumber += (numbers['1'][Number(digit)] + ' ' + numbers[String(object.currentIndex)]);
    }
    if (object.currentIndex === 2) {
        if (object.resultStringNumber !== '' && digit !== '0') {
            object.resultStringNumber += ' ';
        }
        if (digit === '1') {
            object.resultStringNumber += numbers[String(object.currentIndex)][0][Number(arrayDigits[arrayDigits.length - 1])];
        } else if (digit === '0') {
            // object.resultStringNumber += '';
        } else {
            object.resultStringNumber += numbers[String(object.currentIndex)][Number(digit) - 1];
        }
    }
    if (object.currentIndex === 1) {
        if (object.resultStringNumber !== '' && arrayDigits[arrayDigits.length - 2] !== '1' && arrayDigits[arrayDigits.length - 1] !== '0') {
            object.resultStringNumber += ' ';
        }
        if ((object.resultStringNumber !== '' && digit === '0') || arrayDigits.length > 1 && arrayDigits[arrayDigits.length - 2] === '1') {
        } else {
            object.resultStringNumber += numbers[String(object.currentIndex)][Number(digit)];
        }
    }
    object.currentIndex--;
    return object;

  }, { resultStringNumber: '', currentIndex: arrayDigits.length}).resultStringNumber);
}
