function solution(clothes) {
    let answer = 1;
    const category=new Map();
    clothes.forEach(([name,cate])=>{
        if(category.has(cate)){
            category.set(cate,category.get(cate)+1)
        }else{
            category.set(cate,1)
        }
    })

    for(let num of category.values()){
        answer*=(num+1)
    }
    return answer-1;
}

