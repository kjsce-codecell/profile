#include<stdio.h>
#include<conio.h>
void main()
{
 clrscr();
 int i;
 int a[6]={5,9,7,3,4,2};
 int lar=a[0];
 for(i=1;i<6;i++)
 {
  if(a[i]>lar)
  {
   lar=a[i];
  }
 }
 printf("\n LArgest elements is %d",lar);
 getch();
}