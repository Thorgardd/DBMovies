import axios from "axios";

const apiKey = "6eb21f772f8f904f7f8e43a3b60a13d8";

// GET Method for retrieving one movie by his ID
export const GetMovieById = (id, setState) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
        .then((res) => setState(res.data))
        .catch((err) => console.log("Erreur: ", err))
}

// GET Method for retrieving one show by his ID
export const GetShowById = (id, setState) => {
    axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`)
        .then((res) => setState(res.data))
        .catch((err) => console.log("Erreur: ", err));
}

// GET Method for retrieving a list of movies searched by name
export const SendRequestForMovies = (setIsLoading, setMovies, search) => {
    setIsLoading(true);
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&query=${search}`)
        .then((res) => {
            setMovies(res.data.results)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log("Erreur: ", err)
            setIsLoading(false)
        });
}

// GET Methods for retrieving a list of movies searched by name
export const SendRequestForShows = (setIsLoading, setShows, search) => {
    setIsLoading(true);
    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=1&query=${search}`)
        .then((res) => {
            setShows(res.data.results)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log("Erreur:", err)
            setIsLoading(false)
        });
}

// GET Method for retrieving trending movies from TMDB Api
export const SendRequestForTrendingMovies = (setMovies) => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
        .then((res) => setMovies(res.data.results))
        .catch((err) => console.log("Erreur: ", err))
}