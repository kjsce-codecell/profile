#include<stdio.h>
#include<conio.h>
#include<math.h>
void main()
{
 clrscr();
 float p,ci,r,x,n,s,si;
 printf("enter principle amount\n");
 scanf("%f",&p);
 printf("enter rate\n");
 scanf("%f",&r);
 printf("enter time period\n");
 scanf("%f",&n);
 x=r/100+1;
 s=pow(x,n);
 si=(p*n*r)/100;
 ci=p*(s-1);
 printf("the compound interest is %f\n",ci);
 printf("the simple interest is %f\n",si);
 printf("Compiled and run successfully by Akshay Pathak");
 getch();
 }