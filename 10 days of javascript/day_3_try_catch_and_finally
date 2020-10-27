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

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    /*
    *  Explanation
    * Split - "1234" -> ["1","2","3","4"]
    * Reverse - ["4","3","2","1"]
    * Join - "4321"
    */
    
    if( typeof(s) == 'string' ) {
        console.log( s.split("").reverse().join(""));
    }
    else console.log("s.split is not a function\n"+ s );

}


function main() {
    const s = eval(readLine());
    
    reverseString(s);
}
