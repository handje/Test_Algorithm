function solution(n, computers) {
    let answer = 0;
    const visited=Array.from({length:n},()=>false);
    
    const dfs=(i)=>{
        visited[i]=true;
        for(let j=0;j<n;j++){
            if(!visited[j] && computers[i][j]){
                dfs(j)
            }
        }
    }

    for(let i=0;i<n;i++){
        if(!visited[i]){
            dfs(i);
            answer++;
        }
    }
  
    return answer;
}