const numberConverter = (number) => {
  // guard clause for invalid parameter
  if (Number.isNaN(parseInt(number, 10))) {
    /* eslint-disable no-console */
    console.log('error: please pass a number as a parameter');
    return 'error: please pass a number as a parameter';
  }
  // check if zero
  if (parseInt(number, 10) === 0) {
    /* eslint-disable no-console */
    console.log('zero');
    return 'zero';
  }
  // check if number is too big
  if (parseInt(number, 10) === 0) {
    /* eslint-disable no-console */
    console.log('error: number is too big');
    return 'error: number is too big';
  }

  // english numeral names
  const single = [
    '', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine',
  ];
  const teens = [
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
  ];
  const tens = [
    '', '', 'twenty', 'thirty', 'forty',
    'fifty', 'sixty', 'seventy', 'eighty', 'ninety',
  ];
  const hundreds = [
    '', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred',
    'six hundred', 'seven hundred', 'eight hundred', 'nine hundred',
  ];
  const big = ['', ' thousand', ' million', ' billion', ' trillion', 'quadrillion'];

  // converts 3 digit number to english and add unit modifier at the end if necessary
  const getTriple = (digits, unit) => {
    const num = parseInt(digits, 10).toString().split('').map(digit => parseInt(digit, 10));
    switch (num.length) {
      case 1:
        num.unshift(0, 0);
        break;
      case 2:
        num.unshift(0);
        break;
      default:
        break;
    }
    const h = hundreds[num[0]];
    const t = num[1] === 1 ? teens[num[2]] : tens[num[1]];
    const s = num[1] !== 1 ? single[num[2]] : '';

    return [h, t, s].filter(v => !!v).join(' ') + unit;
  };

  // divide the number into 3 digit segments and put into array
  // and unshift remaining digits to front of array after dividing by 3
  const remainder = number.toString().length % 3;
  const numArr = parseInt(number, 10)
    .toString()
    .slice(remainder)
    .split(/(\d{3})/g)
    .filter(v => !!v);
  if (remainder > 0) {
    numArr.unshift(number.toString().slice(0, remainder));
  }

  // call getTriple() starting from end of array to convert to English and add unit modifiers
  const engArr = numArr.reverse().map((digits, index) => getTriple(digits, big[index]));
  const answer = engArr.reverse().join(' ');

  /* eslint-disable no-console */
  console.log(answer);
  return answer;
};

const arg = process.argv[2];
numberConverter(arg);
module.exports = numberConverter;
