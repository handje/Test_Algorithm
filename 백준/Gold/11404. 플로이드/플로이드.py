import sys

input=sys.stdin.readline
INF=int(1e9)

n=int(input())
m=int(input())
graph=[[INF]*(n+1) for i in range(n+1)]

for i in range(m):
    a,b,c=map(int,input().split())
    graph[a][b]=min(graph[a][b],c)
    
for k in range(1,n+1):
    for a in range(1,n+1):
        for b in range(1,n+1):
            if a==b:
                graph[a][b]=graph[b][a]=0
            else:
                graph[a][b]=min(graph[a][b],graph[a][k]+graph[k][b])

for a in range(1,n+1):
    for b in range(1,n+1):
        print(graph[a][b] if graph[a][b]!=INF else 0,end=" ")
    print()