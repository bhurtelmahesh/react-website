import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./Header";


const MyPage = () => {
    return(
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
    );
}

const Body = () => {
    return(
        <main>
        <h1> Reasons why I'm excited to learn React</h1>
        <ol>
            <li>It is the most used JavaScript Library</li>
            <li>It is the most popular JavaScript Library</li>
            <li>It is a very desireable skill, I'm more likely to get a job</li>
            <li>It is a very hireable skill</li>
            <li>Powers thousands of enterprise apps, including mobile apps, so that the job opportunity is pretty high</li>
        </ol>
        </main>
    )
}
const Footer = () => {
    return(
        <footer className='footer'>
            <p>&copy; 2022 Bhurtel Development. All  rights reserved.</p>
        </footer>
    )
}

ReactDOM.render(<MyPage />, document.querySelector('#root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
