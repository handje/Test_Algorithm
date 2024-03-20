#N개의 집, M개의 길, 2개의 마을로 분리할 계획
#a,b,c : a -> b , 비용c
#2개로 분리 = 최소신장그래프를 만든 후, 가장 큰 비용을 제거
# 7 12
# 1 2 3
# 1 3 2
# 3 2 1
# 2 5 2
# 3 4 4
# 7 3 6
# 5 1 5
# 1 6 2
# 6 4 1
# 6 5 3
# 4 5 3
# 6 7 4
# =>8

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

n,m=map(int,input().split())
parent=[i for i in range(n+1)]

edges=[]
res=0

for _ in range(m):
    a,b,cost=map(int,input().split())
    edges.append((cost,a,b))

last=0 #가장큰비용

for edge in sorted(edges):
    cost,a,b=edge
    if find_parent(parent,a)!=find_parent(parent,b):
        union_parent(parent,a,b)
        res+=cost
        last=cost

print(res-last)
