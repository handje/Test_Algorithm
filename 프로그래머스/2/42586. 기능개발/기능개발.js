function solution(progresses, speeds) {
    const remains=[];
    for(let i=0;i<progresses.length;i++){
        const time=Math.ceil((100-progresses[i])/speeds[i]);
        remains.push(time)
    }
    console.log(remains)
    let count=1;
    const answer=[];
    let maxDay=remains[0]
    for(let i=1;i<remains.length;i++){
        if(maxDay>=remains[i]){
            count+=1;
        }else{
            answer.push(count);
            count=1;
            maxDay=remains[i]
        }
        if(i===remains.length-1){
            answer.push(count)
        }
    }

    return answer
}