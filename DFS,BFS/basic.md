# 깊이/너비 우선 탐색 알고리즘

## 그래프
![1](https://github.com/handje/Test_Algorithm/assets/57988006/503d4578-4973-4263-aacf-2c04db51981b)

#### 표현방법

1. 인접행렬
   g=[[0,7,5],[7,0,INF],[5,INF,0]]
2. 인접리스트
   g[0].append((1,7)) => 0번노드와 1번노드가 7로 연결됨

## DFS(Depth-First Search)\_깊이우선탐색

> stack을 이용한 탐색 알고리즘, 최대한 깊이 들어가 노드를 탐색하고 다시 돌아와 다른 경로를 탐색

1. 탐색 시작 노드를 스택에 삽입하고 방문 처리
2. 스택의 초상단 노드에 방문하지 않은 인접 노드가 있으면 그 인접 노드를 스택에 넣고 방문 처리
3. 2번 과정을 더 이상 수행할 수 없을 떄까지 반복
   => O(N)

![5](https://github.com/handje/Test_Algorithm/assets/57988006/1939e3a9-444f-450c-9b18-fe2a71cd4629)
![4](https://github.com/handje/Test_Algorithm/assets/57988006/681ce8d8-9ff3-478c-8c69-53b712039664)

1->2->7->6->8->3->4->5 순으로 탐색

```py
def dfs(graph,v,visited):
   visited[v]=True #v=현재노드

   for i in graph[v]: #노드와 연결된 노드 탐색
      if not visited[i]:
         dfs(graph,i,visited)

visited=[False]*n
dfs(graph,0,visited)
```

## BFS(Breadth-First Search)\_너비우선탐색

> queue를 이용한 탐색 알고리즘, 가까운 노드를 탐색

1. 탐색 시작 노드를 큐에 삽입하고 방문 처리
2. 큐에서 노드를 꺼내 해당 노드 중에서 방문하지 않은 노드를 모두 큐에 넣고 방문 처리
3. 더이상 수행할 수 없을 때까지 반복
   => O(N)

![6](https://github.com/handje/Test_Algorithm/assets/57988006/90429e0e-b861-41a5-9e38-369fdf9b00d7)![7](https://github.com/handje/Test_Algorithm/assets/57988006/cca775ee-461e-4104-8e27-7ae9379dead3)

1->2->3->8->7->4->5->6 순으로 탐색

```py
from collection import deque

def bfs(graph,start,visited):
   queue=deque([start])
   visited[start]=True

   while queue: #큐가 빌 때까지
      v=queue.popleft()
      for i in graph[v]:
         if not visited[i]:
            queue.append(i)
            visted[i]=True

   visited=[False]*n
   bfs(graph,0,visited)
```
