function solution(nums) {
    // const newNum=[...new Set(nums)];
    
//     if(newNum.length<=nums.length/2){
//         return newNum.length;
//     }else{
//         return nums.length/2;
//     }
    const newNum=new Set(nums);
    
    if(newNum.size<=nums.length/2){
        return newNum.size;
    }else{
        return nums.length/2;
    }
}