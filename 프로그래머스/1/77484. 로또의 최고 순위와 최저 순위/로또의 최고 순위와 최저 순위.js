function solution(lottos, win_nums) {
    var answer = [];
    lottos.sort((a,b)=>a-b);
    win_nums.sort((a,b)=>a-b);
    let best=0;
    let worst=0;
    
    for(let l of lottos){
        if(l===0)best++;
        if(win_nums.includes(l)){
            best++;
            worst++;
        }
    }

    if(best<2)best=1;
    if(worst<2)worst=1;
    
    return [7-best,7-worst];
}