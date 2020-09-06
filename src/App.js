import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import scss from './SCSS/wrapper.module.scss';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import SideBar from './Components/sideBar/sideBar';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';

const App = (props) => {
  return (
        <BrowserRouter>
            <div className={scss.wrapper}>
                <div className={scss.Header}>
                    <Header />
                </div>

                <div className={scss.Menu}>
                    <Menu />
                </div>

                <div className={scss.sideBar}>
                    <SideBar state={props.state}/>
                </div>

                <div className={scss.Container}>
                    <Container />
                </div>

                <div className={scss.Footer}>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
  );
}

export default App;