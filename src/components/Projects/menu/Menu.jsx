import { useState } from "react";
import { Resume } from "../../../assets";
import './Menu.css';

function Menu({ channel }) {
    const [channelInfo, setChannelInfo] = useState(false);
    const [githubInfo, setGithubInfo] = useState(false);
    const [skillsInfo, setSkillsInfo] = useState(false);

    const handleChannelInfo = () => {
        setChannelInfo(true);
        setGithubInfo(false);
        setSkillsInfo(false);
    }

    const handleGithubInfo = () => {
        setGithubInfo(true);
        setChannelInfo(false);
        setSkillsInfo(false);
    }

    const handleSkillsInfo = () => {
        setSkillsInfo(true);
        setChannelInfo(false);
        setGithubInfo(false);
    }

    const handelGithubLinkOpen = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div className="tv-menu">
            <div className="menu-items">
                <div className="menu-info">
                    <div className="navigation-list">
                        <button className="navigation-btns" onClick={handleChannelInfo}>Channel Info</button>
                        <button className="navigation-btns" onClick={handleGithubInfo}>Channel repo</button>
                    </div>
                    <div className="channel-navi-info">
                        {channelInfo && (
                            <div className="info-content">
                                <div className="info-content-name">
                                    <p className="info-content-name-p">{channel.name}</p>     
                                </div>
                                <p className="info-content-info">{channel.info}</p>
                            </div>
                        )}
                        {githubInfo && (
                            <div className="info-content">
                                <div className="info-content-name">
                                    <p className="info-content-name-p">{channel.github.repo}</p>     
                                </div>
                                <div className="github-navi-btns">
                                    <button className="navigation-btns" onClick={() => handelGithubLinkOpen(channel.github.URL)}>Visit Repository</button>
                                    <button className="navigation-btns" onClick={() => handelGithubLinkOpen('https://github.com/ashraf00963')}>Visit Profile</button>
                                </div>
                            </div>
                        )}
                        {skillsInfo && (
                            <div className="info-content">
                            <div className="info-content-name">
                                <p className="info-content-name-p">Skills</p>     
                            </div>
                            <p className="info-content-info">Primary:</p>
                            <ul className="technical-skills-list">
                                <li>Frontend Development:<br /> <span className="li-span">HTML, CSS, JavaScript, React.</span></li>
                                <li>Backend Development:<br /> <span className="li-span">Node.js, Express.</span></li>
                                <li>Version Control:<br /> <span className="li-span">Git, GitHub.</span></li>
                            </ul>
                            <p className="info-content-info">Secondary:</p>
                            <ul className="technical-skills-list">
                                <li >Tools and Platforms:<br /> <span className="li-span">cpanel, myPhpAdmin, SQL, Figma.</span></li>
                            </ul>
                        </div>
                        )}
                    </div>
                </div>
                <div className="navigation-info">
                    <h3>Links:</h3>
                    <div className="navigation-help">
                        <button className="navigation-btn" onClick={() => handelGithubLinkOpen(channel.URL)}>Project</button>
                        <button className="navigation-btn" onClick={() => handelGithubLinkOpen('https://www.linkedin.com/in/ashraf-attallah-a36330219/')}>LinkedIn</button>
                        <button className="navigation-btn" onClick={handleSkillsInfo}>Skills</button>
                        <button className="navigation-btn"><a href={Resume} target="_blank">Resume</a></button>
                    </div>
            </div>
            </div>
            
        </div>
    )
}

export default Menu;