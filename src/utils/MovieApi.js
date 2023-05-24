const url = 'https://api.kinopoisk.dev/v1.3/movie/random'; 
const key = process.env.REACT_APP_X_API_KEY; 

const movieArr = [];
for(let i=0; i<6; i+=1){
    const movie = {};
    fetch(url, {
        method: 'GET',
        headers: {
            'X-API-KEY': key,
            Accept: 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            movie.id = data.id;
            movie.rating = data.rating.kp;
            movie.poster = data.poster.previewUrl;
            movie.name = data.name;
            movie.year = data.year;
            movie.genre = data.genres[0].name;
        })
        .catch((err) => `error -> ${err}`);
    movieArr.push(movie);
}

export default movieArr;
