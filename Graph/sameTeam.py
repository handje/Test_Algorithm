#0-n번 학생, m개의 연산
# 0은 union, 1은 find
# 7 8 -> n,m
# 0 1 3
# 1 1 7
# 0 7 6
# 1 7 1
# 0 3 7
# 0 4 2
# 0 1 1
# 1 1 1
#->No,No,YES
#1은 저장, 0은 계산, find&union연산 함수

n,m=map(int,input().split())
res=[]
parent=[i for i in range(n+1)]

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

for _ in range(m):
    k,a,b=map(int,input().split())
    if k==1:
        if find_parent(parent,a)==find_parent(parent,b):
            res.append("YES")
        else:
            res.append("NO")
    else:
        union_parent(parent,a,b)

for r in res:
    print(r)