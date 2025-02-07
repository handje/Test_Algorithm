function solution(maps) {
    const n=maps[0].length-1;
    const m=maps.length-1;
    
    const dx=[0,0,1,-1];
    const dy=[1,-1,0,0];
    
    const q=[[0,0]];
    
    while(q.length){
        const [x,y]=q.shift();
        
        for(let i=0;i<4;i++){
            const newX=x+dx[i];
            const newY=y+dy[i];
            
            if(newX===m&&newY===n){
                return maps[x][y]+1
            }
            if(newX<0 || newX>m){
                continue;
            }
            if(newY<0||newY>n){
                continue;
            }
            if(maps[newX][newY]===0 || maps[newX][newY]>1){
                continue;
            }
            maps[newX][newY]=maps[x][y]+1;
            q.push([newX,newY])
        }
        
    }
    if(maps[m][n]>1){
        return maps[m][n]
    }
    return -1;
}