function solution(participant, completion) {
    var answer = '';
    const map=new Map();
    
    for(let p of participant){
        const curr=map.get(p)??0
        map.set(p,curr+1)

    }
    
    for(let c of completion){
        map.set(c,map.get(c)-1)
    }
    
    for(let k of map.keys()){
        if(map.get(k)!==0)return k;
    }
}