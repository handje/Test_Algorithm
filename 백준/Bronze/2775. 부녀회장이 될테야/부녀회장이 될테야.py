test=int(input())
res=[]

for t in range(test):
    a=int(input())
    b=int(input())
    d=[[0]*15 for i in range(a+1)]

    for i in range(15):
        d[0][i]=i

    for i in range(1,a+1):
        for j in range(1,b+1):
            for k in range(1,j+1):
                d[i][j]+=d[i-1][k]
    res.append(d[a][b])

for r in res:
    print(r)