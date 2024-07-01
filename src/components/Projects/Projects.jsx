import { ImInfo } from "react-icons/im";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import { NoSignal, TvFrame } from '../../assets';
import { useState } from "react";
import './Projects.css';
import Menu from "./menu/Menu";

const channels = [
        {
            name: 'list to-do',
            URL: 'https://list-todo.com',
            github: {
                repo: 'list_To-Do',
                URL: 'https://github.com/ashraf00963/list_To-Do',
            },
            info: 'web application designed to help users organize their daily tasks or break down large projects into manageable steps with detailed notes for each task. This application emphasizes user-friendly design and smooth interactions, ensuring a seamless experience for task management.'
        },
        {
            name: 'NTL', 
            URL: 'https://nexttolast.store',
            github: {
                repo: 'NextToLast',
                URL:'https://github.com/ashraf00963/NextToLast',
            },
            info: 'Next To Last is an e-commerce platform specializing in high-quality watches, built with React and Express. It offers a seamless shopping experience with a modern interface, and a curated selection of stylish timepieces for discerning customers.'
        },
        {
            name: 'Genius Pockets',
            URL: 'https://geniuspockets.com',
            github: {
                repo: 'geniuspockets',
                URL:'https://github.com/ashraf00963/geniuspockets',
            },
            info: 'Genius Pockets  personal finance management application designed to help users manage their savings, track expenses, and monitor income. The platform offers personalized savings compartments (Pockets) for different goals, real-time balance updates, and interactive charts for visual representation of financial data.'
        },
        {
            name: 'Error',
            URL: NoSignal,
            github: {
                repo: 'Error',
                URL: 'https://pranx.com/hacker/',
            },
            info: 'Error 404'
        }
    ] 

function Projects() {
    const [curChannel, setCurChannel] = useState(channels[0]);
    const [showPopup, setShowPopup] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [showChannelName, setShowChannelName] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    const handleNextChannel = () => {
        const currentIndex = channels.findIndex(channel => channel.name === curChannel?.name);
        setShowPopup(false);
        setMenuVisible(false);
        setIsTransitioning(true);
        setTimeout(() => {
            if (currentIndex === -1 || currentIndex === channels.length - 1) {
                setCurChannel(channels[0]);
            } else {
                setCurChannel(channels[currentIndex + 1]);
            }
            setIsTransitioning(false);
            setShowChannelName(true);
            setTimeout(() => setShowChannelName(false), 2000);
        }, 300);
    };

    const handlePrevChannel = () => {
        const currentIndex = channels.findIndex(channel => channel.name === curChannel?.name);
        if (currentIndex > 0) {
            setShowPopup(false);
            setMenuVisible(false);
            setIsTransitioning(true);
            setTimeout(() => {
                setCurChannel(channels[currentIndex - 1]);
                setIsTransitioning(false);
                setShowChannelName(true);
                setTimeout(() => setShowChannelName(false), 1000);
            }, 300);
        }
    };

    const handleMenuToggle = () => {
        setMenuVisible(!menuVisible);
    }

    return(
        <div className='projects-page'>
            <div className='projects-content'>
                <img className='tv-frame' src={TvFrame} alt='Tv Frame' />
                <div className={`projects-project ${isTransitioning ? 'transition' : ''}`}>
                    {curChannel.name === 'Error' ? (
                        <img src={NoSignal} className="ntl-iframe" />
                    ) : (
                        <iframe src={curChannel.URL} className='ntl-iframe' ></iframe>
                    )}
                    {menuVisible && (
                        <Menu channel={curChannel}/>
                    )}
                    {showChannelName && (
                        <div className="channel-name-overlay">
                            {curChannel.name}
                        </div>
                    )}
                </div>
                <div className='projects-project-btns'>
                    <button className='info-btn' onClick={handleMenuToggle}><ImInfo /></button>
                    <div className="channel-navi-btns">
                        <button onClick={handlePrevChannel} className="prev-ch-btn"><GrCaretPrevious /></button>
                        <button onClick={handleNextChannel} className="next-ch-btn"><GrCaretNext /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;