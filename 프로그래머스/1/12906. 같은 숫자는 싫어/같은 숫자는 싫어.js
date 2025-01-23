function solution(arr)
{
    const answer=[];
    
    for(let a of arr){
        if(answer[answer.length-1]===a)continue;
        answer.push(a)
    }
    return answer
}