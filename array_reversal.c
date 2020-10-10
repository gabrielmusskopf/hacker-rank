#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num, *arr, i, temp;
    scanf("%d", &num);
    arr = (int*) malloc(num * sizeof(int));

    for(i = 0; i < num; i++) {
        scanf("%d", arr + i);
    }

    int t = num;

    /* Write the logic to reverse the array. */
    for (i=0; i<num/2; i++){            // Only half is needed
        temp = *(arr+i);                // Temp keep the value of array at index i        
        *(arr+i) = *(arr + (t-1) );     // Frist array values recives the last values
        *(arr + (t-1) ) = temp;         // Last values recives frist values
        t--;
    }


    for(i = 0; i < num; i++)
        printf("%d ", *(arr + i));
    return 0;
}
