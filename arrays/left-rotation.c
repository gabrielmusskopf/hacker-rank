/**
 *  Author: Gabriel Musskopf
 *
 *  A left rotation operation on an array shifts each of the array's elements  unit to the left.
 *  For example, if  left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2].
 *  Given an array 'a' of 'n' integers and a number, 'd', perform 'd' left rotations on the array.
 *  Return the updated array to be printed as a single line of space-separated integers.
 *
 *  Compiled in CodeBlocks
 */

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

 // Complete the rotLeft function below.

// Please store the size of the integer array to be returned in result_count pointer. For example,
// int a[3] = {1, 2, 3};
//
// *result_count = 3;
//
// return a;
//


/*
 * Exibe os elementos do array
 * @param arr array para ser exibido
 * @param size tamanho do array
 */
void display(int* arr, int size){

    for(int i=0; i< size; i++){
        printf("%d ",arr[i]);
    }
    printf("\n");
}

/*
*   Function to rotate to left
*
*   Troca o último elemento pelo elemento[último - shifts], faz isso 'a_count' vezes
*
*   @param a_count elemnt numbers of array a
*   @a array
*   @d number of rotations
*   @result_count size of array to be returned
*/
int* rotLeft(int a_count, int* a, int d, int* result_count) {

    for(int i=1; i<a_count; i++){
        int shifts = d*i;
        int last = a_count-1;

        while(shifts > a_count){
            shifts = shifts - a_count;

        }

        int aux = a[last- shifts];
        a[last - shifts] = a[last];
        a[last] = aux;


        for(int j=0; j<a_count; j++){
            printf("%d ",a[j]);
        }
        printf("\n");
    }


    *result_count = a_count;
    return a;

}



int main(void){

    srand(time(NULL));
    int a_count = 20;//rand()%10;
    int* arr = (int*) calloc(a_count, sizeof(int));
    int d = 10, result_count;


    for(int i=0; i<a_count; i++){
        arr[i] = i+1;//rand()%10;
    }


    printf("Antes do left: ");
    display(arr,a_count);

    int* result = rotLeft(a_count, arr, d, &result_count);

    printf("\nDepois do left: ");
//    display(arr,d);

    for(int i=0; i<result_count; i++){
        printf("%d ", *(result + i));
    }

    free(arr);
}
