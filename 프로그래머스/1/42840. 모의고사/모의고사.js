function solution(answers) {
    const one=[1,2,3,4,5];
    const two=[2,1,2,3,2,4,2,5];
    const three=[3,3,1,1,2,2,4,4,5,5];
    
    const answer=[];
    let count=[0,0,0]
    
    for(let i=0;i<answers.length;i++){
        const correct=answers[i]
        if(one[i%one.length]===correct){
            count[0]++;
        }
                if(two[i%two.length]===correct){
            count[1]++;
        }
                if(three[i%three.length]===correct){
            count[2]++;
        }
    }
    
    const big=Math.max(...count);
    
    for(let i=0;i<3;i++){
        if(count[i]===big)answer.push(i+1)
    }
   return answer

}