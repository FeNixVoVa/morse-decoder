const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let stringSize = expr.length;
    let result = '';
    for (let i = 0; i < stringSize; i = i + 10) {
        let charString = expr.slice(i, i + 10);
        if (charString === '**********') {
            result += ' ';
        } else {
            let someChar = '';
            for (let j = 0; j < 10; j = j + 2) {
                let partChar = charString.slice(j, j + 2);
                if (partChar === '11') {
                    someChar += '-';
                } else if (partChar === '10') {
                    someChar += '.';
                }
            };
            result += MORSE_TABLE[someChar.toString()];
        }
    }
    return result;
}

module.exports = {
    decode
}