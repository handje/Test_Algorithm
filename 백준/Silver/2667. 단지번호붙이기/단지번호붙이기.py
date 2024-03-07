n=int(input())

count=0
graph=[]
visited=[0]*(n+1)
home=0
res=[]

for i in range(n):
    graph.append(list(map(int,list(input()))))

def dfs(x,y):
    global home
    if x<=-1 or x>=n or y<=-1 or y>=n:
        return False
    if graph[x][y]==1:
        graph[x][y]=0
        dfs(x-1,y)
        dfs(x+1,y)
        dfs(x,y-1)
        dfs(x,y+1)
        home+=1
        return True
    return False

for i in range(n):
    for j in range(n):
        if dfs(i,j)==True:
            count+=1
            res.append(home)
            home=0

print(count)
for i in sorted(res):
    print(i)