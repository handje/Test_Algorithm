#프로그래머스 게임맵 최단거리
from collections import deque

def solution(maps):
    answer = 0

    #아래+우 방향 먼저 체크
    dx=[1,0,-1,0]
    dy=[0,1,0,-1]
    
    n=len(maps)
    m=len(maps[0]) 

    def bfs(x,y):
        queue=deque()
        queue.append((x,y))
        
        while queue:
            x,y=queue.popleft()
            
            for i in range(4):
                nx=x+dx[i]
                ny=y+dy[i]
                
                if nx<0 or nx>=n or ny<0 or ny>=m:
                    continue
                    
                if maps[nx][ny]==0 or maps[nx][ny]>1: #벽일때 , 이미 방문했을때는 넘어가기
                    continue
                    
                if maps[nx][ny]==1 :
                    maps[nx][ny]=maps[x][y]+1
                    
                    if nx==n-1 and ny==m-1:
                        return maps[n-1][m-1]
                    
                    queue.append((nx,ny))
                    
        return -1
    
    return bfs(0,0)

print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]))
#bfs, 효율성 문제를 위해 방문조건 확인하기