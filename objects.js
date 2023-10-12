const artists = [
    {
    Artist: "taylor swift",
    Genre: ["pop", "country", "pop rock"],
    Age: 33,
    LatestAlbum: "speak now (taylors version)",
    },
    {
    Artist: "keshi",
    Genre: ["r&b"],
    Age: 28,
    LatestAlbum: "gabriel",
    },
    {
    Artist: "mitski",
    Genre: ["indie"],
    Age: 33,
    LatestAlbum: "the land is inhospitable and so are we",
    },
    {
    Artist: "matt maltese",
    Genre: ["alt indie"],
    Age: 26,
    LatestAlbum: "krystal",
    },
    {
    Artist: "babygirl",
    Genre: ["indie pop"],
    Age: 24,
    LatestAlbum: "be still my heart",
    },
];


artists.forEach((artist) => 
 artist.Genre.forEach((genre) => console.log(genre))
)

artists.forEach((artist)=> console.log(artist.LatestAlbum))
const results = artists.filter((artist) => artist.Age == 33);
console.log(results);
