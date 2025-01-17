function solution(s) {
    const answer=s.split('');
    let count=0;
    for(let i=0;i<answer.length;i++){
        if(answer[i]===" "){
            count=0;
            continue;
        }
        if(count%2===0){
            answer[i]=answer[i].toUpperCase();
        }else{
            answer[i]=answer[i].toLowerCase();
        }
        count++
    }
    return answer.join('');
}