'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countApplesAndOranges function below.
/* @param s: integer, starting point of Sam's house location.
 * @param t: integer, ending location of Sam's house location.
 * @param a: integer, location of the Apple tree.
 * @param b: integer, location of the Orange tree.
 * @param apples: integer array, distances at which each apple falls from the tree.
 * @param oranges: integer array, distances at which each orange falls from the tree.
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {

    var pos = 0;
    var a_aux = 0;    
    var o_aux = 0;
        
    for(var i=0; i<apples.length; i++){
        pos = a + apples[i] ;

        if( pos >= s && pos <= t ){
            a_aux+=1;
        }
    }
    
    for(var i=0; i<oranges.length; i++){
        pos = b + oranges[i] ;
        
        if( pos >= s && pos <= t ){
            o_aux+=1;
        }
    }
    
    console.log(a_aux + "\n" + o_aux);

}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
