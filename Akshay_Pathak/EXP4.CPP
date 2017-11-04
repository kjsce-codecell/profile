#include<stdio.h>
#include<conio.h>
void main()
{
 clrscr();
 int i,j,n,k;
 printf("enter no of rows\n");
 scanf("%d",&n);
 for(i=1;i<=n;i++)
 {
  for(j=1;j<=n-i;j++)
  {
   printf(" ");
  }
  for(k=1;k<=i;k++)
  {
   printf("%d",2*k-1);
  }

  printf("\n");
 }
 printf("run successfully by Akshay Pathak");
 getch();
}
