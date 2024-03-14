#백준2775

#a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다
#0층부터 , 1호부터
#1<=k(층) , n(호)<=14
#1,3 -> 6
#2,3-> 10

#d[a][b]=d[a-1][1]+...+d[a-1][b]
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