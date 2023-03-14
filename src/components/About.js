import React from "react";
import './about.css';
import profilePic from '../assets/Portfolio-Profile-Pic.jpg'

export default function About() {
    const userInfo = {
        profile_pic: profilePic,
        bio: "I live by the idea that everything and everyone share a connection. Therefore I strive to write meaningful, well thoughtout out programs sourced from the heart.  My journey began as a biology major with a passion for science, creativity and critical thinking.  I have since discovered the power of code and love the fact I can incorporate my passions in a way that is magical and useful to everyday users. I am skilled in HTML, CSS, JS, React.js, Agile development, git version control.  I am also  familiar with Node.js, Express, RDBs, Postgres, SQL, Docker, Jira, Figma.",
    }

    return (
        <div id ="About">
            <h3 className='section_title'>| ABOUT |</h3>
            <div className='txt_wrapper'>
                <img src={userInfo.profile_pic}
                alt='this is me!'/>
                <p>{userInfo.bio}</p>
            </div>
        </div>
    )
}