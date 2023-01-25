import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import TvShows from "../pages/TvShows";
import Header from "../components/Header";
import Details from "../pages/Details";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/movies"} element={<Movies/>}/>
                        <Route path={`/movies/:id`} element={<Details/>}/>
                        <Route path={"/shows"} element={<TvShows/>}/>
                        <Route path={`/shows/:id`} element={<Details/>}/>
                    </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;