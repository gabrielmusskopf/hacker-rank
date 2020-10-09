#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {

    char *s;
    char c[2] = " ";
    char* token;

    s = malloc(1024 * sizeof(char));
    scanf("%[^\n]", s);
    s = realloc(s, strlen(s) + 1);
    //Write your logic to print the tokens of the sentence here.


    token = strtok(s, c);

    while(token != NULL){
        printf("%s\n",token);

        token = strtok(NULL, c);
    }

   
    return 0;
}
