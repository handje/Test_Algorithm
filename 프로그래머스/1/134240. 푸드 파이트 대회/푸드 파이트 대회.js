function solution(food) {
    var answer = '';
    let left="";
    let right="";
    
    for(let i=1;i<food.length;i++){
        let curr=food[i];
        while(curr>1){
            left+=String(i)
            right=String(i)+right
            curr-=2
        }
    }
    return left+"0"+right;
}