function solution(n, m) {
    const answer = [];
    const bigger=Math.max(n,m)
    const smaller=Math.min(n,m)

    for(let i=smaller;i>=1;i--){
        if(n%i===0&&m%i===0){
            answer.push(i);
            break
        }
    }
    
    let j=1;
    while(true){
        if((bigger*j)%smaller===0){
            answer.push(bigger*j)
            break
        }
        j++;
    }
    return answer;
}