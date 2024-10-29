function solution(s){
   const temp=[];
    for(let i of s){
        if(i==="("){
            temp.push(1)
        }else{
            if(temp.length===0){
                return false
            }
            temp.pop();
        }
    }
    return temp.length>0?false:true;
}