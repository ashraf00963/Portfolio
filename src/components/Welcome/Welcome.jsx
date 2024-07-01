import React, { useEffect, useState } from 'react';
import './Welcome.css';

function Welcome() {
    const [text, setText] = useState('Journey');
    const [animate, setAnimate] = useState('');
    const words = ['Portfolio', 'Projects', 'Journey'];

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setAnimate('exit');
            setTimeout(() => {
                setText(words[index]);
                setAnimate('enter');
                index = (index + 1) % words.length;
            }, 100);
        }, 200); 

        const timeoutId = setTimeout(() => {
            clearInterval(intervalId);
            setAnimate('exit');
            setTimeout(() => {
                setText('Journey');
                setAnimate('enter');
            }, 100); 
        }, 3000); 

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className='welcome-page'>
            <div className='welcome-content'>
                <h1 className='welcome-h1'>
                    Welcome To My{' '}
                    <span className={`journey ${animate}`}>{text}</span>
                </h1>
            </div>
        </div>
    );
}

export default Welcome;
