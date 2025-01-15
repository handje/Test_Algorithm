function solution(x) {
    const total=String(x).split('').reduce((acc,curr)=>Number(curr)+acc,0);

    return x%total===0;
}