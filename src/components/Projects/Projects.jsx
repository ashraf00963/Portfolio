import { ImInfo } from "react-icons/im";
import { FaGithub } from "react-icons/fa6";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import { TvFrame } from '../../assets';
import './Projects.css';
import { useState } from "react";

function Projects() {
   

    const channels = [
        {
            name: 'list to-do',
            URL: 'https://list-todo.com',
            github: 'https://github.com/ashraf00963/list_To-Do',
            info: 'web application designed to help users organize their daily tasks or break down large projects into manageable steps with detailed notes for each task. This application emphasizes user-friendly design and smooth interactions, ensuring a seamless experience for task management.'
        },
        {
            name: 'NTL', 
            URL: 'https://nexttolast.store',
            github: 'https://github.com/ashraf00963/NextToLast',
            info: 'Next To Last is an E commerce store that sells watches build with react, Express'
        },
        {
            name: 'Genius Pockets',
            URL: 'https://geniuspockets.com',
            github: 'https://github.com/ashraf00963/geniuspockets',
            info: 'Genius Pockets  personal finance management application designed to help users manage their savings, track expenses, and monitor income. The platform offers personalized savings compartments (Pockets) for different goals, real-time balance updates, and interactive charts for visual representation of financial data.'
        }
    ] 
    
    const [curChannel, setCurChannel] = useState(channels[0]);

    const handleNextChannel = () => {
        const currentIndex = channels.findIndex(channel => channel.name === curChannel?.name);
        if (currentIndex === -1 || currentIndex === curChannel.length - 1) {
            setCurChannel(null);
        } else {
            setCurChannel(channels[currentIndex + 1]);
        }
    }

    const handlePrevChannel = () => {
        const currentIndex = channels.findIndex(channel => channel.name === curChannel?.name);
        if (currentIndex > 0) {
            setCurChannel(channels[currentIndex -1]);
        }
    }

    return(
        <div className='projects-page'>
            <div className='projects-content'>
                <img className='tv-frame' src={TvFrame} alt='Tv Frame' />
                <div className='projects-project'>
                    <iframe src={curChannel.URL} className='ntl-ifraem' ></iframe>
                </div>
                <div className='projects-project-btns'>
                    <button className='info-btn'><ImInfo /></button>
                    <button className="github-btn"><FaGithub /></button>
                    <button onClick={handlePrevChannel} className="prev-ch-btn"><GrCaretPrevious /></button>
                    <button onClick={handleNextChannel} className="next-ch-btn"><GrCaretNext /></button>
                </div>
            </div>
        </div>
    )
}

export default Projects;