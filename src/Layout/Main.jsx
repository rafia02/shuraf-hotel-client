import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Components/Home/Home/Home';
import Header from '../Components/Share/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet>
                
            </Outlet>
        </div>
    );
};

export default Main;