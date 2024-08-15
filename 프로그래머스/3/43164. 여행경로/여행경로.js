function solution(tickets) {
    var answer = [];
    const visited=new Set();
    
    const dfs=(route)=>{
        if(route.length===tickets.length+1){
             answer.push(route);
        }
        for(let i in tickets){
            if(visited.has(i)){
                continue;
            }
            const [dep,arr]=tickets[i];
            if(route[route.length-1]===dep){
                visited.add(i)
                dfs([...route,arr])
                visited.delete(i)
            }
        }
        
    }
    dfs(["ICN"]);
    return answer.sort()[0];
}