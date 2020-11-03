import java.util.Scanner;

public class Solution {

    public static void main(String[] args) {
            Scanner sc=new Scanner(System.in);
            System.out.println("================================");
            for(int i=0;i<3;i++){
                String s1=sc.next();
                int x=sc.nextInt();
                
                //Complete this line
                String spaces = new String(" ");
                
                for(int j=0; j< 14-s1.length() ; j++){
                    spaces += " ";
                }
                if(x >=100){
                    System.out.println(s1+ spaces +x);
                }
                else if(x >= 10){
                    System.out.println(s1+ spaces +"0"+x);
                }
                else 
                    System.out.println(s1+ spaces +"00"+x);
            }
            System.out.println("================================");

    }
}
