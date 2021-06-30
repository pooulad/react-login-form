import React from 'react';
import "./Home.css";
import mylogo from "./pooulad.png";

function Dashboard() {
    return (
        <div className="home">
            <div className="header_logo">
                <img src={mylogo} alt="logo" />
            </div>
            <div className="main">
                <h1>welcome to dashboard page</h1>
            </div>
        </div>
    )
}

export default Dashboard
