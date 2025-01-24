function solution(clothes) {
    const map=new Map();
    
    for(let [a,b] of clothes){
        const curr=map.get(b)??0
        map.set(b,curr+1)
    }

    let answer=1;
    
    for(let [key,value] of map.entries()){
        answer*=value+1
    }
    return answer-1
}