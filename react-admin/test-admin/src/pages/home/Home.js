import React from 'react'
import Widget from '../../widget/Widget';
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <div className="widgets">
                <Widget type='orders' />
                <Widget type='customers' />
                <Widget type='products' />
                <Widget type='sales' />
            </div>

        </div>
    )
}

export default Home