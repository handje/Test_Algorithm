function solution(participant, completion) {
    const checkMap=new Map();
    
    for(let com of completion){
        if(checkMap.has(com)){
            checkMap.set(com,checkMap.get(com)+1)
        }else{
            checkMap.set(com,1)
        }
    }
    
    for(let par of participant){
        if(!checkMap.has(par)||checkMap.get(par)===0){
            return par
        }
        checkMap.set(par,checkMap.get(par)-1)
    }
}