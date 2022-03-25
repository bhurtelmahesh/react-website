import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";


const MyPage = () => {
    return(
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
    );
}




ReactDOM.render(<MyPage />, document.querySelector('#root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
