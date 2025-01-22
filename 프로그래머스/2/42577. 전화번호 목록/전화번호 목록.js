function solution(phone_book) {
   phone_book.sort();
    const n=phone_book.length
    for(let i=0;i<n-1;i++){
        if(phone_book[i+1].startsWith(phone_book[i]))return false
    }
    
    return true;
}