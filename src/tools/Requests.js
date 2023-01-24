import axios from "axios";

// GET Method for retrieving one movie by his ID
export const GetMovieById = (id, setState, apiKey) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
        .then((res) => {
            setState(res.data)
        })
        .catch((err) => console.log(err))
}

// GET Method for retrieving one show by his ID
export const GetShowById = (id, setState, apiKey) => {
    axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`)
        .then((res) => {
            setState(res.data)
        })
        .catch((err) => console.log(err));
}

// GET Method for retrieving a list of movies searched by name
export const SendRequestForMovies = (setIsLoading, setMovies, apiKey, search) => {
    setIsLoading(true);
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&query=${search}`)
        .then((res) => {
            setMovies(res.data.results)
            console.log(res.data.results[1])
            setIsLoading(false)
        })
        .catch((err) => {
            console.log("Erreur: ", err)
            setIsLoading(false)
        });
}

// GET Methods for retrieving a list of movies searched by name
export const SendRequestForShows = (setIsLoading, setShows, apiKey, search) => {
    setIsLoading(true);
    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=1&query=${search}`)
        .then((res) => {
            setShows(res.data.results)
            setIsLoading(false)
            console.log(res.data.results)
        })
        .catch((err) => {
            console.log("Erreur:", err)
            setIsLoading(false)
        });
}