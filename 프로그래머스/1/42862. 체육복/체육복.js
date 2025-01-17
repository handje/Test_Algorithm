function solution(n, lost, reserve) {
    var answer = 0;
    const remains=Array(n+1).fill(1);
    lost.sort((a,b)=>a-b);
    reserve.sort((a,b)=>a-b)
    remains[0]=0;
    
        for(let r of reserve){
        remains[r]++
    }
    
    for(let l of lost){
        remains[l]--;
    }
    
    for(let i=1;i<n+1;i++){
        if(remains[i]>0)continue;
         if(i-1>0&&remains[i-1]===2){
            remains[i]++;
            remains[i-1]--;
             continue
        }
        if(i+1<n+1&&remains[i+1]===2){
            remains[i]++;
            remains[i+1]--;
            continue;
        }
    }
    return remains.filter((a)=>a!==0).length;
}