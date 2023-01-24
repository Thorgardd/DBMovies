// Check for the movies keyword presence in URL
export const CheckIsMovieParams = (setState) => {
    if (window.location.href.indexOf("movies") !== -1){
        setState(true);
        return true;
    } else {
        setState(false);
        return false;
    }
}