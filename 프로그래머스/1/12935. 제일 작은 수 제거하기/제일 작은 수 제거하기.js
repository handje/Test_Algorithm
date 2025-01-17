function solution(arr) {
    const answer=arr.filter((a)=>a!==Math.min(...arr))
    return answer.length===0?[-1]:answer;
}