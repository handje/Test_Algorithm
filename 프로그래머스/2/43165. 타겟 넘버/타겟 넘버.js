function solution(numbers, target) {
    let answer = 0;

    const dfs=(res,idx)=>{
        if(idx===numbers.length){
            if(res===target)answer++;
            return;
        }
        dfs(res+numbers[idx],idx+1);
        dfs(res-numbers[idx],idx+1);
    }
    dfs(0,0)
    return answer;
}