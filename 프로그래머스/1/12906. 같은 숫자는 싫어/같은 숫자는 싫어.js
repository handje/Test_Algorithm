function solution(arr)
{
    const answer=[];
    for(let num of arr){
        if(answer[answer.length-1]===num){
            continue;
        }
        answer.push(num)
    }
    return answer
}