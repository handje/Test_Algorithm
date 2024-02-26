#프로그래머스 네크워크 뭉텅이 찾기
def solution(n, computers):
    
  def dfs(i):
    visited[i] = True
    
    for j in range(n):  
      if not visited[j] and computers[i][j]: 
        dfs(j)
        
  res = 0   
  visited = [False] * (n)   

  for i in range(n):
    if not visited[i] :
      dfs(i)
      res += 1    

  return res

print(solution(3,[[1,1,0],[1,1,0],[0,0,1]]))
print(solution(3,[[1,1,0],[1,1,1],[0,1,1]]))
#dfs
#방문하지 않은 노드를 쭉 방문
#dfs을 내부에 넣어야함