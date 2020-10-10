/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    
    var vowel = 'aeiouAEIOU'
    var consonant = []
    var c

    for (c=0; c < s.length; c++){
        if( vowel.includes(s[c])){
            console.log(s[c]);
        }
        else{
            consonant += s[c] + '\n'
        }
    }
    console.log(consonant)
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
