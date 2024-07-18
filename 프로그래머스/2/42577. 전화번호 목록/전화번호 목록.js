function solution(phone_book) {
    phone_book.sort();
    
    return !phone_book.some((num,idx)=>phone_book[idx+1]?.startsWith(num))
}