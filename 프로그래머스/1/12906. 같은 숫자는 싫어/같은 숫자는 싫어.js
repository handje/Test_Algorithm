function solution(arr)
{
    const answer=[arr[0]];
    for(let i=1;i<arr.length;i++){
        if(answer[answer.length-1]===arr[i]){
            continue;
        }
        answer.push(arr[i])
    }
    return answer
}