import React from 'react'
import './nav.css';

export default function Nav() {
    const user = {
        name: 'Luis Bryan Dominguez',
        linkedIn: 'https://www.linkedin.com/in/luisbdominguezr/'     
    } 

    return (
        <nav id='#Nav'>
            <div className='user_name'>
                <a href={user.linkedIn}>
                    {user.name}
                </a>
            </div>
            <div className='links'>
                <a href='/'>Home</a>
                <a href='#projects'>Projects</a>
                <a href='#about'>About</a>
                <a href='#contact'>Contact</a>
            </div>
        </nav>
    )
}