function solution(genres, plays) {
  const genreMap = new Map();

  genres.forEach((genre, index) => {
    if (!genreMap.has(genre)) {
      genreMap.set(genre, { totalPlays: 0, songs: [] });
    }
    genreMap.get(genre).totalPlays += plays[index];
    genreMap.get(genre).songs.push({ play: plays[index], index });
      
  });

  const sortedGenres = [...genreMap.entries()].sort((a, b) => b[1].totalPlays - a[1].totalPlays);
  console.log(sortedGenres)
  const result = [];
  for (const [genre, info] of sortedGenres) {
    const topSongs = info.songs
      .sort((a, b) => b.play - a.play || a.index - b.index)
      .slice(0, 2);
    topSongs.forEach(song => result.push(song.index));
  }
  
  return result;
}