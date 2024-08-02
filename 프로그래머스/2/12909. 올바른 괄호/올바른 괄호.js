function solution(s){
    var answer = true;
    const correct=new Map()
    correct.set(")","(")
    const stack=[];
    for(let i=0;i<s.length;i++){
        if(correct.has(s[i])){
            if(!stack.pop()){
                return false;
            }    
        }else{
            stack.push(s[i])
        }
    }
    if(stack.length>0){
        return false;
    }
    return true;
}