n=int(input())
sugar=[3,5]

d=[5001]*(n+1)
d[0]=0

for k in sugar:
    for j in range(k,n+1):
        d[j]=min(d[j-k]+1,d[j])
        
print(d[n] if d[n]!=5001 else -1)