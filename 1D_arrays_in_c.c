#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main(){

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */    

    int n, *arr, i=0, sum=0;

    scanf("%d",&n);

    arr = (int*)malloc(n*sizeof(int));  // Creating a dynamic array of size n

    for (i =0; i<n; i++){
        scanf("%d", arr+i);
    }

    for (i =0; i<n; i++){
        sum += *(arr+i);
    }

    printf("%d",sum);
    free(arr);


    return 0;
}
