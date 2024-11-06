function solution(array, commands) {
    var answer = [];
    for (let c of commands){
        const [i,j,k]=c;
        const num=array.slice(i-1,j);
        num.sort((a,b)=>a-b)
        answer.push(num[k-1])
    }
    return answer;
}