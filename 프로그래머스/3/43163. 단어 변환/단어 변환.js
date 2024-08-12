function check(prev,curr){
    let count=0
    for(let i=0;i<curr.length;i++){
        if(prev[i]!==curr[i]){
            count++;
        }
        if(count>1){
            return false;
        }
    }
    return true;
}

function solution(begin, target, words) {
    if(words.indexOf(target)===-1){
        return 0;
    }
    
    const queue=[[begin,0]];
    
    const visited=new Map();
    
    let answer = 0;
    
    while(queue.length>0){
        console.log(queue)
        let [word,cnt]=queue.shift();
        visited.set(word,cnt);
        if(word===target){
            return cnt;
        }
        for(let i=0;i<words.length;i++){
            if(visited.has(words[i])){
                continue;
            }
            if(check(word,words[i])){
                queue.push([words[i],cnt+1]);
            }
        }
        
    }
    return answer;
}