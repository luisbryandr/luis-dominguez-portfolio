import React, { useState } from "react";
import Project from "./Project";
import './projects.css'

export default function Projects() {
    const [ displayProjects, setDisplayProjects ] = useState(true)

    const userProjects = [
        {
            title: 'Favorite-Teams-Tracker', 
            description: `If you're like me and wanted a simple app to check on your favorite team's schedule then you are in luck because that is exactly what this app does.  I wanted a place where I could quickly check my team's upcoming games so I can add them to my schedule and enjoy watching them.  Using ESPN or other providers proved to be too clunky, too broad and complex, therefore I built this app to provide me with the most relevant information I was looking for regarding my teams.  Hope you enjoy its simplicity and specificity.`,// describe what the application/project does and why its useful
            contributions: [    // list how your contributions to the project
                'Designed the User Interface using Figma and styled it using Styled components ', 
                'Built a React.js app, into a responsive and fluid functional page', 
                'Incorporated a public sports API in order to get real time data', 
            ],
            gitHub: 'https://github.com/luisbryandr/favorite-sports-teams', // add a link to repo here (leave blank to not display icon)
            deployed_site: 'https://favorite-sports-teams.pages.dev/', //if you have a deployed site then feel free to add it (leave blank to not display icon)
            background_image: "https://img2.cgtrader.com/items/2023706/025baf0f38/50-football-teams-3d-logo-collection-pack-3d-model.jpg",
        },
        {
            title: 'CoderHeroes ', 
            description: 'CoderHeroes establishes the next generation of innovators and disruptors by empowering youth and young adults to innovate community solutions through code. Booking site for online classes. A web application to aid in the cause of helping underprivileged youth in the US break into tech.Parents buy tickets for either 1:1 or group classes. Like Eventbrite—organizers make a scheduled event date with a given number of available seats, then parents would buy tickets/slots for each specific event. Building a light LMS. System to manage **administration** and **attendance** of classes', // describe what the application/project does and why its useful'
            contributions: [    // list how your contributions to the project
                'Coordinated, directed, and prioritized features with stakeholders and project managers on a weekly basis ', 
                'Developed unit tests for the endpoints, database access, and ensured middleware functions of API', 
                'Implemented database access endpoints using Express routing and Knex helper functions',
                'Utilized Agile Strategies to ensure project progress  by conducting daily team meetings and completed set deadlines'
            ],
            gitHub: 'https://github.com/BloomTech-Labs/coder-heroes-be', // add a link to repo here (leave blank to not display icon)
            deployed_site: 'https://a.coderheroes.dev/', //if you have a deployed site then feel free to add it (leave blank to not display icon)
            background_image:  "https://www.verynika.com/build/_assets/CoderHeroes-X34RGFI4.png" ,
        },
        {
            title: 'Quote of the Day', 
            description: 'Full-Stack application lets you enter, edit, and delete a quote of your choosing. Generate a quote of the day from the database of entered quotes', // describe what the application/project does and why its useful
            contributions: [    // list how your contributions to the project
                'Pair programmed this app from ground up', 
                'Strategized the infrastructure of the website', 
                'Utilized styled components, material UI, and React.js to build site', 
            ],
            gitHub: 'https://github.com/luisbryandr/quote-of-the-day', // add a link to repo here (leave blank to not display icon)
            deployed_site: 'https://todaysquote.pages.dev/', //if you have a deployed site then feel free to add it (leave blank to not display icon)
            background_image: "https://www.ourmindfullife.com/wp-content/uploads/2020/06/Motivation-quotes-for-Wednesday-ourmindfullife.com-1.jpg.webp",
        },
        {
            title: 'Water My Plants', 
            description: 'Ensuring that all your plants are consistently watered is actually pretty difficult. Water My Plants is an app that helps to solve those problems. With an easy to use interface for creating a plant watering schedule tailored to each individual plant, "Water My Plants" will remind users when it is time to feed that foliage and quench your plants', // describe what the application/project does and why its useful
            contributions: [    // list how your contributions to the project
                'Designed a responsive interface that assisted users in creating a plant watering schedule tailored for individual plants', 
                'Developed a log-in page and functionality using Yup & Axios for form schema validation allowing user app access', 
                'Instituted an edit page for users that facilitated plants list customization using React.js and Styled Components', 
            ],
            gitHub: 'https://github.com/Build-Week-Water-My-Plants-05/front-end', // add a link to repo here (leave blank to not display icon)
            deployed_site: 'https://front-end-inky-two.vercel.app/',
            background_image: "https://cdn.sanity.io/images/y346iw48/production/a59cbb8951fa663a7ffeef5324e1cf7037a70b57-4000x2250.jpg?w=884&auto=format", //if you have a deployed site then feel free to add it (leave blank to not display icon)
        },
    ]

    return (
        <div id='Projects'>
            <h3 className='section_title'>| PROJECTS |</h3>
            {displayProjects && <div className='projects_wrapper'>
                {userProjects.map((proj, index) => {
                    return <Project proj={proj} setDisplayProjects={setDisplayProjects} key ={index}/>
                })}
            </div> }
        </div>
    )
}