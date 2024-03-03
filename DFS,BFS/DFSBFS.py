#백준1260
n,m,v = map(int,input().split())

graph = [[0]*(n+1) for i in range(n+1)]
for i in range (m):
    a,b = map(int,input().split())
    graph[a][b] = graph[b][a] = 1

visitedD = [0]*(n+1)
visitedB = [0]*(n+1)

def dfs(v):
    visitedD[v] = 1 
    print(v, end=' ')
    for i in range(1, n+1):
        if graph[v][i] == 1 and visitedD[i] == 0:
            dfs(i)

def bfs(v):
    queue = [v]
    visitedB[v] = 1 
    while queue:
        v = queue.pop(0) 
        print(v, end = ' ')
        for i in range(1, n+1):
            if graph[v][i] == 1 and visitedB[i] == 0:
                queue.append(i)
                visitedB[i] = 1 

dfs(v)
print()
bfs(v)
