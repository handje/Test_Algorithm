function solution(priorities, location) {
    const answer = [];
    const queue=[];
    for(let i=0;i<priorities.length;i++){
        queue.push([i,priorities[i]])
    }
    while(queue.length>0){
        const first=queue.shift();
        const len=queue.length;
        for(let p of queue){
            if(first[1]<p[1]){
                queue.push(first);
                break;
            }
        }
        
        if(len===queue.length){
            answer.push(first)
        }
        
    }

    for(let i=0;i<answer.length;i++){
        if(answer[i][0]===location){
            return i+1
        }
    }
}