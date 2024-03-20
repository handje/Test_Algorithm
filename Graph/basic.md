# 그래프

- 노드와 간선의 정보를 가지고 있는 자료구조
- 트리는 그래프에 포함됨

## 서로소 집합(자료구조)

- 서로소 집합 : 공통원소가 없는 두 집합
- 서로소 집합 자료구조 : 서로소 부분 집합들로 나누어진 원소들의 데이터를 처리하기 위한 자료구조

### union & find 연산으로 조작

- union 연산의 결과 = 간선
- 번호가 큰 노드가 작은 노드를 가리킴 -> 큰 노드의 부모노드=작은 노드
- 연산 과정 O(V+M(1+logV))
  1. 노드의 개수(V) 크기의 부모 테이블을 자기 자신으로 초기화
  2. union 연산을 확인하며 큰 노드의 테이블 값을 작은노드의 값으로 변경
     => 부모노드만을 저장하기때문에 재귀적으로 거슬러 올라가야함 (find연산)

```py
    #find연산
    def find_parent(parent,x):
        if parent[x]!=x: #루트노드가 아니라면
            parent[x]=find_parent(parent,parent[x])
        return parent[x]
        #최적화를 위해 경로압축기법 사용=시간단축 , 기존코드 = return find_parent(parent,parent[x])

    #union연산
    def union_parent(parent,a,b):
        a=find_parent(parent,a)
        b=find_parent(parent,b)
        if a<b:
            parent[b]=a
        else:
            parent[a]=b
    #...
    for i in range(e):
        union_parent(parent,a,b)
```

### Cycle 판별

- 서로소 집합을 이용하여 무방향 그래프 내에서의 사이클을 판별할 수 있음
- 간선을 확인하다가 두 노드가 루트노드가 같으면 사이클이 발생

```py
    def find_parent(parent,x)
    def union_parent(parent,a,b)
    #...
    cycle=False
    for i in range(e):
        if find_parent(parent,a)==find_parent(parent,b):
            cycle=True
            break
        else:
            union_parent(parent,a,b)
    if cycle:
        #사이클 발생
```

## 신장트리(Spanning Tree)

- 하나의 그래프가 있을 때 모든 노드를 포함하면서 사이클이 존재하지 않는 부분 그래프

### 크루스칼 알고리즘(Kruskal Algorithm) O(ElogE)

- (ex) 최소한의 비용으로 도시를 연결
- 최소 신장 트리 알고리즘 중 하나

1. 모든 간선에 대하여 오름차순 정렬
2. 간선을 확인하며 사이클 발생 확인
   1. 사이클이 발생하면 포함x
   2. 사이클이 발생하지 않으면 포함o

- 최종 간선의 수 = 노드개수 -1

```py
    def find_parent(parent,x)
    def union_parent(parent,a,b)
    #...
    edges=[]
    result=0

    #간선의 정보
    for _ in range(e):
        edges.append((cost,a,b))

    edges.sort() #cost기준으로 정렬
    for edge in edges:
        cost,a,b=edge
        if find_parent(parent,a)!=find_parent(parent,b): #사이클이 없으면 포함
            union_parent(parent,a,b)
            result+=cost
```

## 위상정렬(Topology Sort) O(V+E)

- 정렬 알고리즘, 순서가 정해져 있는 일련의 작업을 차례대로 수행해야 할 때 사용
- 방향 그래프의 모든 노드를 방향성에 거스르지 않도록 순서대로 나열 (ex) 선수과목 등
- 특정 노드로 들어오는 간선의 개수 = 진입차수
- 주로 사이클이 없다는 가정이 주어짐

1. 진입차수가 0 인 노드를 큐에 넣기
2. 큐에서 나온 노드와 연결된 간선을 삭제하고 1반복

```py
from collections import deque

indegree=[0]*(v+1) #모든 노드에 대한 진입차수를 0으로 초기화
graph=[[]for i in range(v+1)] #간선정보

for i in range(e):
    graph[a].append(b)
    indegree[b]+=1

def topoloy_sort():
    result=[]
    q=deque()

    for i in range(1,v+1):
        if indegree[i]==0:
            q.append(i)
    while q:
        now=q.popleft()
        result.append(now)
        for i in graph[now]:
            indegree[i]-=1
            if indegree[i]==0:
                q.append(i)
```
