function solution(priorities, location) {
    const prior=[];
    const answer=[];
    for(let i=0; i<priorities.length;i++){
        prior.push([i,priorities[i]])
    }

    while(prior.length>0){
        let [idx,p]=prior.shift();
        let maxNum=Math.max(...prior.map((v)=>v[1]));
        if(p>=maxNum){
            answer.push(idx)
        }else{
            prior.push([idx,p])
        }
    }
    return answer.findIndex((e)=>e===location)+1
}