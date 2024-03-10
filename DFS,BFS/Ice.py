#알고리즘책_음료수 얼려먹기(0으로 연결된 부분 찾기)
n,m=map(int,input().split())

graph=[]
for i in range(n):
    graph.append(list(map(int,input())))

def dfs(x,y):
    if x<=-1 or x>=n or y<=-1 or y>=m:
        return False
    if graph[x][y]==0:
        graph[x][y]=1
        dfs(x-1,y)
        dfs(x+1,y)
        dfs(x,y-1)
        dfs(x,y+1)
        return True
    return False

res=0
for i in range(n):
    for j in range(m):
        if dfs(i,j)==True:
            res+=1
            print(i,j,res)
print(res)

#dfs
#상하좌우를 살펴보며 방문하지않은 부분 찾기

#001
#010
#101

#3