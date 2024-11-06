function solution(citations) {
  citations.sort((a, b) => b - a);
  for (let h = citations[0]; h >= 0; h--) {
    const cita = citations.filter((e) => e >= h);
    if (cita && cita.length >= h) {
      return h;
    }
  }
}