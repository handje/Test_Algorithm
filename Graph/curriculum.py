#1-n개의 강의, 선수과목이 있음, 동시에 여러개 강의를 들을 수 있음
#강의시간과 그 강의의 선수과목의 번호, -1이 마지막
# 5
# 10 -1
# 10 1 -1
# 4 1 -1
# 4 3 1 -1
# 3 3 -1

# 10
# 20
# 14
# 18
# 17
from collections import deque
import copy

def find_parent(parent,x):
    if parent[x]!=x:
        parent[x]=find_parent(parent,parent[x])
    return parent[x]

def union_parent(parent,a,b):
    a=find_parent(parent,a)
    b=find_parent(parent,b)
    if a<b:
        parent[b]=a
    else:
        parent[a]=b

n=int(input())
indegree=[0]*(n+1)
graph=[[] for i in range(n+1)] #연결리스트
time=[0]*(n+1) #각 강의시간

for i in range(1,n+1):
    data=list(map(int,input().split()))
    time[i]=data[0]
    for x in data[1:-1]:
        graph[x].append(i)
        indegree[i]+=1

def topology_sort():
    result=copy.deepcopy(time)
    q=deque()

    for i in range(1,n+1):
        if indegree[i]==0:
            q.append(i)
    
    while q:
        now=q.popleft()
        for i in graph[now]:
            result[i]=max(result[i],result[now]+time[i]) #더 오래걸리는 시간이 있으면 갱신
            indegree[i]-=1
            if indegree[i]==0:
                q.append(i)
    
    for i in range(1,n+1):
        print(result[i])
    
topology_sort()