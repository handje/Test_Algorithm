function solution(phone_number) {
    const stars="*".repeat(phone_number.length-4);
    const last=phone_number.slice(phone_number.length-4);

    return stars+last;
}