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

function factorial(n){
    var result=1;

    if( n === 0 || n === 1 ) return 1;

    while( n>1 ){
        result *= n;
        n--;
    }
    return result;
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}
