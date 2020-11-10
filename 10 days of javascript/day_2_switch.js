'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
    // var fl = s.charAt(0);
    
    switch(s[0]){
        case 'a'||'e'||'i'||'o'||'u':
            return "A"
            break;
        
        case 'b'||'c'||'d'||'f'||'g':
            return "B"
            break;
            
        case 'h'||'j'||'k'||'l'||'m':
            return "C"
            break;
           
        default:
            return "D" 
        
    }
    
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
