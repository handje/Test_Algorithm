#백준9095
#1,2,3 으로 만들수 있는 모든 경우의 수
#4->7
#7->44

t=int(input())
res=[]
d=[0]*(12)
d[1]=1 
d[2]=2 
d[3]=4 

for i in range(t):
    n=int(input())

    for i in range(4,n+1):
        d[i]=d[i-1]+d[i-2]+d[i-3]

    res.append(d[n])

for r in res:
    print(r)
