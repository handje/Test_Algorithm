function solution(s) {

    if(s[0]!=="+"){
        return Number(s)
    }
    const answer=s.split('');
    return Number(answer.slice(1).join(''));
}