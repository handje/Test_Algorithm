function solution(genres, plays) {
    const answer=[]
    const genreCount=new Map();
    const music=new Map();
    
    for(let i=0;i<genres.length;i++){
        const gr=genres[i];
        
        if(genreCount.has(gr)){
            genreCount.set(gr,genreCount.get(gr)+plays[i])
        }else{
            genreCount.set(gr,plays[i])
        }
        
        if(music.has(gr)){
            music.set(gr,[...music.get(gr),[i,plays[i]]])
        }else{
            music.set(gr,[[i,plays[i]]])
        }
    }
    
    const sortedGenre=Array.from(genreCount.entries()).sort((a,b)=>b[1]-a[1])
    
    for(let [key,values] of music){
        const sorted=Array.from(values).sort((a,b)=>b[1]-a[1]);
        music.set(key,sorted)
    }

    for(let g of sortedGenre){
        const temp=music.get(g[0]);  
        if(temp.length>=2){
            answer.push(temp[0][0]);
         answer.push(temp[1][0]);
        }else{
            answer.push(temp[0][0])
        }
    }
    return answer
}