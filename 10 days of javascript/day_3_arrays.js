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

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function

    var swapped = true;
    var max = 0, s_max = 0;
    
    do{
        swapped = false;
        for(var j=0; j<nums.length; j++){
            if(nums[j] > nums[j+1]){
                var aux = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = aux;
                swapped = true;
            }
        }
    }while(swapped);
    
    for(var i=nums.length-2; i>=0; i--){
        if(nums[i] != nums[i+1]){
            return nums[i];
        }
        
    }
    
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}
