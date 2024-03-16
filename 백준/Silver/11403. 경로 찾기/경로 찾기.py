import sys

INF=int(1e9)
graph=[]

n=int(input())

for i in range(n):
    graph.append(list(map(int,input().split())))

for a in range(n):
    for b in range(n):
        if graph[a][b]==1:
            continue
        graph[a][b]=INF

for k in range(n):
    for a in range(n):
        for b in range(n):
            graph[a][b]=min(graph[a][b],graph[a][k]+graph[k][b])

for a in graph:
    for b in a:
        print(0 if b==INF else 1,end=" ")
    print()