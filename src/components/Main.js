import React from "react";

export default function Main () {
    const user = {
        name: 'Luis Bryan Dominguez',
        subtitle: 'Soulful Coder'
    }

    return (
        <div id='Main'>
            <div className="main-background-img" >
                <div className="main-links">
                    <a href="/">Home</a>
                    <a href="#Projects">Projects</a>
                    <a href="#About">About</a>
                    <a href="#Contact">Contact</a>
                </div>
                <div className="main-text">
                    <h1>{user.name}</h1>
                    <h2>{user.subtitle}</h2>
                </div>
            </div>
        </div>
    )
}