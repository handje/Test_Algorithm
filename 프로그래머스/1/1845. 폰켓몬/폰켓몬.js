function solution(nums) {
    var answer = 0;
    const setNums=new Set(nums);
    const count=nums.length/2
    if(setNums.size>count)return count;
    else return setNums.size
}