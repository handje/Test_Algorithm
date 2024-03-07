n=int(input())
v=int(input())

count=0
graph=[[0]*(n+1) for i in range(n+1)]
visited=[0]*(n+1)

for i in range(v):
    x,y=map(int,input().split())
    graph[x][y]=graph[y][x]=1


def dfs(v):
    global count
    visited[v]=1
    count+=1
    for i in range(n+1):
        if graph[v][i]==1 and visited[i]==0:
            dfs(i)

dfs(1)
print(count-1)