function solution(a, b) {
    let answer = 0;
    const s=Math.min(a,b);
    const e=Math.max(a,b);
    for(let i=s;i<=e;i++){
        answer+=i
    }
    return answer;
}