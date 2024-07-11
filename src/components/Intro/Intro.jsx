import { useEffect } from 'react';
import { Me } from '../../assets';
import './Intro.css';

function Intro() {
    useEffect(() => {
        const introContent = document.querySelector('.intro-content');
        const imgElement = document.querySelector('.me');
        const nameElement = document.querySelector('.intro-info h3');
        const titleElement = document.querySelector('.intro-info h2');
        const paragraph = document.querySelector('.intro-info p');
        const profElement = document.querySelector('.prof'); // Add this line
        const introPage = document.querySelector('.intro-page');

        const handleScroll = () => {
            const introPageTop = introPage.offsetTop;
            const introPageHeight = introPage.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY;

            // Manage fixed position of intro-content within intro-page bounds
            if (scrollPosition >= introPageTop && scrollPosition < (introPageTop + introPageHeight - windowHeight)) {
                introContent.style.position = 'fixed';
                introContent.style.top = '0';
                introContent.classList.remove('hidden');
            } else if (scrollPosition >= (introPageTop + introPageHeight - windowHeight)) {
                introContent.style.position = 'absolute';
                introContent.style.top = 'auto';
                introContent.style.bottom = '0';
                introContent.classList.add('hidden');
            } else {
                introContent.style.position = 'absolute';
                introContent.style.top = '0';
                introContent.style.bottom = 'auto';
                introContent.classList.remove('hidden');
            }

            // Reveal elements when scrolling
            if (scrollPosition > introPageTop + 0) {
                imgElement.classList.add('visible');
            } else {
                imgElement.classList.remove('visible');
            }

            if (scrollPosition > introPageTop + 100) {
                nameElement.classList.add('visible');
            } else {
                nameElement.classList.remove('visible');
            }

            if (scrollPosition > introPageTop + 150) {
                profElement.classList.add('visible'); 
            } else {
                profElement.classList.remove('visible'); 
            }

            if (scrollPosition > introPageTop + 250) {
                titleElement.classList.add('visible');
            } else {
                titleElement.classList.remove('visible');
            }

            if (scrollPosition > introPageTop + 500) {
                paragraph.classList.add('visible');
            } else {
                paragraph.classList.remove('visible');
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    introContent.classList.add('visible');
                } else {
                    introContent.classList.remove('visible');
                }
            },
            {
                root: null,
                threshold: 0.1,
            }
        );

        observer.observe(introContent);
        window.addEventListener('scroll', handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='intro-page'>
            <div className='intro-content'>
                <img src={Me} alt='Ashraf Attallah' className='me' />
                <div className='intro-info'>
                    <h3>Ashraf Attallah</h3>
                    <h2 className='prof'>Frontend Developer</h2>
                    <p>Based in Berlin, Germany, I am a Junior Frontend Developer originally from Syria.<br /> I hold a certification in Front End Engineering from Codecademy.<br /> I am deeply passionate about solving complex problems and crafting user-friendly,<br /> interactive websites that provide unforgettable experiences.</p>
                </div>
            </div>
            <div className='container-bottom'></div>
        </div>
    );
}

export default Intro;
