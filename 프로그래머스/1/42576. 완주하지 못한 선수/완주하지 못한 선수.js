function solution(participant, completion) {
//     participant.sort();
//     completion.sort();
    
//     for(let i=0;i<completion.length;i++){
//         if(participant[i]!==completion[i]){
//             return participant[i]
//         }
//     }
//     return participant[participant.length-1]
    
    const result=new Map();
    
    for(let i=0;i<participant.length;i++){
        const p=participant[i];
        result.set(p,(result.get(p)||0)+1);
        
        if(i<=completion.length){
            const c=completion[i];
            result.set(c,(result.get(c)||0)-1);
        }
    }
    for(let [key,value] of result){
        if(value>0){
            return key
        }
    }
    return -1
}