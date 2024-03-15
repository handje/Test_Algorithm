#최단 경로
= 가장 짧은 길 찾기

## 다익스트라(데이크스트라)

- 특정 노드에서 출발하여 다른 노드로 가는 각각의 최단 경로를 구해줌
- 음의 간선은 x
- 그리디로 분류됨
- 과정

1. 출발 노드 설정
2. 최단거리 table 초기화 : 출발노드는 0, 나머지는 무한(1e9)으로 설정, 1차원 리스트
3. 방문하지 않은 노드 중 최단거리가 가장 짧은 노드 선택
4. 해당 노드를 거쳐 다른 노드로 가는 비용을 계산하여 table 갱신
5. 3,4번을 반복

```py
#1.리스트 : O(V**2) , V는 노드의 수
    import sys
    input=sys.stdin.readline
    INF=int(1e9) #무한으로 설정
    # ...
    start=int(input())
    graph=[[] for i in range(n+1)] #노드에 연결된 정보를 담는 리스트
    visited=[False]*(n+1)
    distance=[INF]*(n+1) #최단거리 테이블을 무한으로 초기화
    #...
    #방문하지 않은 노드 중, 가장 거리가 짧은 노드 반환
    def get_smallest_node():
        min_value=INF
        index=0
        for i in range(1,n+1):
            if distance[i]<min_value and not visited[i]:
                min_value=distance[i]
                index=i
        return index

    def dijkstra(start):
        distance[start]=0 #출발노드의 거리는 0
        visited[start]=True
        for j in graph[start]: #거리를 입력
            distance[j[0]]=j[1]
        #n-1반복
        for i in range(n-1):
            now=get_smallest_node()
            visited[now]=True
            for j in graph[now]:
                cost=distance[now]+j[1]
                if cost<distance[j[0]]:
                    distance[j[0]]=cost

    for i in range(1,n+1):
        if distance[i]==INF:
            #도달할 수 없는 경우
        else:
            #도달할 수 있는 경우[

#2.힙 : O(ElogV) , E는 간선의 수 =>힙(heap)은 튜플의 첫번째 요소가 우선순위를 결정
    import heapq
    #... visited배열은 x
    def dijkstra(start):
        q=[]
        heapq.heappush(q,(0,start))
        distance[start]=0
        while q:
            dist,now=heapq.heappop(q) #가장 최단거리가 짧은 노드에 대한 정보 꺼내기
            if distance[now]<dist:
                #이미 처리된 적 있는 노드
                continue
            #현재 노드와 연결된 인접 노드 확인
            for i in graph[now]:
                cost=dist+i[1]
                if cost<distance[i[0]]:
                    distance[i[0]]=cost
                    heapq.heappush(q,(cost,i[0]))
```

## 플로이드워셜

- 모든 지점에서 다른 모든 지점까지의 최단 경로
- 2차원 리스트( O(N\*_2) _ N)
- node개수만큼 step 수행하면 table 완성
- Dab=min(Dab,Dak+Dkb)

```py
    graph=[[INF]*(n+1) for i in range(n+1)] #2차원 배열

    for i in range(1,n+1):
        for b in range(1,n+1):
            if a==b: #자기 자신으로 가는 비용=0
                graph[a][b]=0

    for k in range(1,n+1):
        for a in range(1,n+1):
            for b in range(1,n+1):
                graph[a][b]=min(graph[a][b],graph[a][k]+graph[k][b])

```

## 벨만 포드

매 단계마다 모든 간선을 전부 확인하면서 모든 노드간의 최단 거리를 구해나감 (음수 간선도 가능)
