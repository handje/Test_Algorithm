import sys
sys.setrecursionlimit(10**6)

t=int(input())
count=[]

def dfs(x,y):
    if x>=n or x<0 or y>=m or y<0:
        return False
    if graph[x][y]==1:
        graph[x][y]=0
        dfs(x+1,y)
        dfs(x-1,y)
        dfs(x,y+1)
        dfs(x,y-1)
        return True
    return False


for case in range(t):
    m,n,k=map(int,input().split())
    graph=[[0]*m for i in range(n)]
    for i in range(k):
        x,y=map(int,input().split())
        graph[y][x]=1

    temp=0
    for i in range(n):
        for j in range(m):
            if dfs(i,j)==True:
                temp+=1
    count.append(temp)

for c in count:
    print(c)