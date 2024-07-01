import { useEffect, useRef, useState } from 'react';
import './TvIntro.css';

function TvIntro() {
    const introRef = useRef(null);
    const [message, setMessage] = useState("Welcome to my project showcase! Click the info icon to learn more about each project, explore details, and visit the GitHub repositories.");
    const [currentClass, setCurrentClass] = useState('');
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const handleIntersection = ([entry]) => {
            if (entry.isIntersecting && !hasAnimated) {
                setCurrentClass('animate-typing');
                setTimeout(() => {
                    setCurrentClass('animate-deleting');
                    setTimeout(() => {
                        setMessage("Projects");
                        setCurrentClass('animate-projects');
                        setHasAnimated(true);
                    }, 2000); 
                }, 11000); 
            }
        };

        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

        if (introRef.current) {
            observer.observe(introRef.current);
        }

        return () => {
            if (introRef.current) {
                observer.unobserve(introRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <div className="tv-intro-container">
            <div ref={introRef} className={`tv-intro-text ${currentClass}`}>
                {message} {currentClass === 'animate-typing' && !message.includes("Projects")}
            </div>
        </div>
    );
}

export default TvIntro;
