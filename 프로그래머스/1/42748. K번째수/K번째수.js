function solution(array, commands) {
    const answer = [];
    for (let [i,j,k] of commands){
const newArr=array.slice(i-1,j).sort((a,b)=>a-b)
answer.push(newArr[k-1])
}
    return answer;
}