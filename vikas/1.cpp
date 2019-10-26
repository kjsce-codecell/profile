
#include <stdio.h>

int main(void) {
	int a[100],c,t,i,j,n,k;
	scanf("%d",&t);
	for(i=0;i<t;i++)
    {
        scanf("%d",&n);
        scanf("%d",&k);

        for(i=0;i<n;i++)
        {
           scanf("%d",&a[i]);
        }
        c=0;
         for(i=0;i<n*k;i++)
        {
            for(j=i+1;j<n*k;j++)
            {
                if(a[i%n]>a[j%n])
                {
                    c++;
                }

            }


        }

      printf("%d\n",c);

    }


	return 0;
}

