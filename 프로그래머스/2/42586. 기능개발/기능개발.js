function solution(progresses, speeds) {
    var answer = [];

    const day=[];
    for(let i=0;i<progresses.length;i++){
        const last=100-progresses[i]
        day.push(Math.ceil(last/speeds[i]))
    }

    
    let prev=day[0];
        let count=1;
    for(let i=1;i<day.length;i++){
        if(prev<day[i]){

            answer.push(count);
            count=1;
            prev=day[i]
        }else{
            count++;
        }
    }
    answer.push(count)
    return answer;
}