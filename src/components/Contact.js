import React from "react"


export default function Contact() {
    const user = {
        resume: '',
        linkedIn: 'https://www.linkedin.com/in/luisbdominguezr/',
        gitHub: 'https://github.com/luisbryandr',
    }

    return (
        <div id='Contact'>
            <div>{user.resume && <a href={user.resume} download>Resume</a> }
            </div>
            <div className='footer-links'>
                <a href='/'>Home</a>
                <a href='#Projects'>Projects</a>
                <a href='#About'>About</a>
            </div>
            <div>
                <a href={user.linkedIn}>LinkedIn</a>
                <a href={user.gitHub}>GitHub</a>
            </div>
        </div>
    )
}