from collections import deque

n,m=map(int,input().split())
graph=[]
dx=[1,0,-1,0]
dy=[0,1,0,-1]

for i in range(n):
    graph.append(list(map(int,list(input()))))

def bfs(x,y):
    queue=deque()
    queue.append((x,y))

    while queue:
        x,y=queue.popleft()
        for i in range(4):
            nx=dx[i]+x
            ny=dy[i]+y
            if nx>=n or nx<0 or ny>=m or ny<0:
                continue
            if graph[nx][ny]==0 or graph[nx][ny]>1:
                continue
            if graph[nx][ny]==1:
                graph[nx][ny]=graph[x][y]+1
                queue.append((nx,ny))
    return graph[n-1][m-1]

print(bfs(0,0))