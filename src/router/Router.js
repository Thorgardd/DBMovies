import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import TvShows from "../pages/TvShows";
import Header from "../components/Header";

const Router = () => {
    return (
        <>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/movies"} element={<Movies/>}/>
                    <Route path={"/shows"} element={<TvShows/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;