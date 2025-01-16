function solution(a, b, n) {
    let answer = 0;
    while(n>=a){
        const getC=Math.floor(n/a)
        const last=n%a;
        answer+=getC*b;
        n=getC*b+last
    }
    return answer
}