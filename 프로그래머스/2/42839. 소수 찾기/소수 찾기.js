// 문자열 쪼개기 -> 모든 조합찾기-> 소수인지 판별
function solution(numbers) {
    const set = new Set();
  
    function generatePermutations(current, others) {
      if (current) set.add(parseInt(current));
      for (let i = 0; i < others.length; i++) {
        generatePermutations(current + others[i], others.slice(0, i) + others.slice(i + 1));
      }
    }
  
    function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    generatePermutations('', numbers);
    
    return [...set].filter(isPrime).length;
  }