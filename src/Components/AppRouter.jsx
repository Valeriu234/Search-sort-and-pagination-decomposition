import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./UI/Navbar/Navbar";
import About from "../Pages/About";
import Posts from "../Pages/Posts";

const AppRouter = () => {
    return (
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/about'  element={<About/>}/>
                    <Route path='/posts' element={<Posts/>}/>
                    <Route path='*' element={<Posts/>}/>
                </Routes>
            </BrowserRouter>
    );
};

export default AppRouter;