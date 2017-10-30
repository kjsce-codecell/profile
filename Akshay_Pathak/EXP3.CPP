#include<stdio.h>
#include<conio.h>
void main()
{
	clrscr();
	int n,rem,pal=0;
	printf("enter number ");
	scanf("%d",&n);
	int p=n;
	while(n!=0)
	{
		rem=n%10;
		pal=pal*10+rem;
		n=n/10;
	}
	if(p==pal)
	{
		printf("the number is palindrome");
	}
	else
	{
		printf("the number is not palindrome");
	}
	getch();
}
