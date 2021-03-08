#include <stdlib.h>
#include <stdio.h>

void swap(int *n1, int *n2){
    int aux;
    aux = *n1;
    *n1 = *n2;
    *n2 = aux;
}

// Complete the countSwaps function below.
void countSwaps(int a_count, int* a) {
    int count = 0;

    for (int i = 0; i < a_count; i++) {
        for (int j = 0; j < a_count - 1; j++) {
            if (a[j] > a[j + 1]) {
                swap(&a[j], &a[j + 1]);
                count++;
            }
        }
    }
    printf("Array sorted in %d swaps\n",count);
    printf("First Element: %d\n", a[0]);
    printf("Last Element: %d\n", a[a_count-1]);
}


int main(void) {

    int array[3] = {6, 4, 1};
    countSwaps(3, &array);

}
