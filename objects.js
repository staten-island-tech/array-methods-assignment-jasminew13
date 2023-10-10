const artists = [
    {
    Artist: "tswift",
    Genre: "pop",
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
    Age: "?",
    LatestAlbum: "be still my heart",
    },
]
const result = artists.filter((artist)=> artist.age == "33");
console.log(result); 
    