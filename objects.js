const artists = [
    {
    Artist: "taylor swift",
    Age: 33,
    LatestAlbum: "speak now (taylors version)",
    },
    {
    Artist: "keshi",
    Genre: "r&b",
    Age: 28,
    LatestAlbum: "gabriel",
    },
    {
    Artist: "mitski",
    Genre: "alt indie",
    Age: 33,
    LatestAlbum: "the land is inhospitable and so are we",
    },
    {
    Artist: "matt maltese",
    Genre: "alt indie",
    Age: 26,
    LatestAlbum: "krystal",
    },
    {
    Artist: "babygirl",
    Genre: "indie pop",
    Age: 24,
    LatestAlbum: "be still my heart",
    },
]
artists.forEach((el)=> console.log(el.Artist))
const taylor = ["pop", "country", "pop rock"];
console.log(taylor[0]);
console.log(taylor[1]);
console.log(taylor[2]);
console.log(taylor[3]);

const results = artists.filter((artist) => artist.Age == 33);
console.log(results);
