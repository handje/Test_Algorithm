function solution(k, score) {
    const answer = [];
    const temp=[];
    for(let s of score){
        if(temp.length<k){
            temp.push(s)
        }
        if(temp.length>=k&&s>temp[temp.length-1]){
            temp.pop();
            temp.push(s)
        }
        temp.sort((a,b)=>b-a)
        answer.push(temp[temp.length-1])
    }
    return answer;
}