function solution(priorities, location) {
    let count=1;
    const queue=[];
    for(let i=0;i<priorities.length;i++){
        const value=priorities[i]
        queue.push([i,value])
    }

    while(priorities.length>0){
        const [idx,value]=queue.shift();
        const curr=priorities.shift()

        if(Math.max(...priorities)>curr){
            priorities.push(curr);
            queue.push([idx,value])
            continue;
        }
        if(idx===location){
            return count;
        }
        count++;
    }
}