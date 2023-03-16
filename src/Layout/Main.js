import React from 'react';
import { Outlet } from 'react-router-dom';
// import Banner from '../Pages/Home/Banner/Banner';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import Note from '../Pages/Shared/Note/Note';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Note></Note>
            <Footer></Footer>
        </div>
    );
};

export default Main;