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