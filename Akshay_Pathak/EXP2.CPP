#include<stdio.h>
#include<conio.h>
void main()
{
 clrscr();
 int y,m;

 printf("enter year ");
 scanf("%d",&y);
 printf("enter months in number ");
 scanf("%d",&m);

 switch(m)
 {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
  printf("31 days");
  break;
  case 2:
  if(y%4==0)
  {
   printf("29 days");
  }
  else
  {
   printf("28 days");
  }
  break;
  case 4:
  case 6:
  case 9:
  case 11:
  printf("30 days");
  break;
  default:
  printf("invalid input");

 }
 printf("\nsucessfully compiled and run by Akshay Pathak");
 getch();
}