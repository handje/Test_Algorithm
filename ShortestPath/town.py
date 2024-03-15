#알고리즘책
#A -> K -> X 의 최소이동
# 4 2
# 1 3
# 2 4
# 3 4
# => -1
#N의 범위가 100이하 => 플로이드 워셜

INF=int(1e9)

n,m=map(int,input().split())
graph=[[INF]*(n+1) for i in range(n+1)]

for a in range(1,n+1):
    for b in range(1,n+1):
        if a==b:
            graph[a][b]==0

for i in range(m):
    a,b=map(int,input().split())
    graph[a][b]=1
    graph[b][a]=1

x,k=map(int,input().split())

for k in range(1,n+1):
    for a in range(1,n+1):
        for b in range(1,n+1):
            graph[a][b]=min(graph[a][b],graph[a][k]+graph[k][b])

distance=graph[1][k]+graph[k][x]

print(-1 if distance>=INF else distance)