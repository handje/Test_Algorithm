function solution(n) {
    const x=Math.sqrt(n)    
    if(x===Math.ceil(x)){
        return (x+1)**2
    }
    return -1;
}