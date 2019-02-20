import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './style.scss';

class App extends React.Component {
    render() {
        return (
            <div className="content-wrap">
                <h2>Get Started</h2>
                <h1>Simple MERN Stack Boilerplate</h1>
                <a className="github-btn" href="https://github.com/arravind-r/simple-mern-stack" target="_blank">GitHub Repo</a>
            </div>
    );
    }
}
ReactDOM.render(
<App/>,
    document.getElementById('root')
);