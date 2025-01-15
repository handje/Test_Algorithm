function solution(sizes) {
    var answer = 0;
    sizes.map((size)=>size.sort((a,b)=>a-b));
    let x=0;
    let y=0;
    for(let [a,b] of sizes){
        if(x<a)x=a;
        if(y<b)y=b;
    }
    return x*y;
}