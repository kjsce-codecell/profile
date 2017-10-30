#include<stdio.h>
#include<conio.h>
void main()
{
 clrscr();
 int a[4]={1,3,5,7};
 int i,j,k,m;
 for(i=0;i<=3;i++)
 {
  printf("the array is %d\n",a[i]);

 }

 for(k=0;k<=3;k++)
 {
  j=a[0];
  for(i=0;i<=3;i++)
  {

   a[i]=a[i+1];

  }
   a[3]=j;
  for(m=0;m<=3;m++)
  {
   printf("\nthe array is %d",a[m]);
  }
 printf("\n");
 }
 printf("the program was succesfully executed by Akshay Pathak");
 getch();
}