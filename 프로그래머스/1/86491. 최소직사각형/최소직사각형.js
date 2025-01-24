function solution(sizes) {
    for(let i=0;i<sizes.length;i++){
        sizes[i].sort((a,b)=>a-b)
    }
    
    console.log(sizes)
    let row=0;
    let col=0;
    
    for(let i=0;i<sizes.length;i++){
        if(row<sizes[i][0])row=sizes[i][0]
        if(col<sizes[i][1])col=sizes[i][1]
    }
    return row*col
}