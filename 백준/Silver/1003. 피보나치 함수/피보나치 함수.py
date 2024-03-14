
d=[[0,0] for i in range(41)]
d[0][0]=1
d[0][1]=0
d[1][0]=0
d[1][1]=1

test=int(input())
res=[]

for t in range(test):
    n=int(input())  
    for i in range(2,n+1):
        d[i][0]=d[i-1][0]+d[i-2][0]
        d[i][1]=d[i-1][1]+d[i-2][1]
    res.append((d[n][0],d[n][1]))

for r in res:
    print(r[0],r[1])
