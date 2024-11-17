import { useEffect } from 'react';
import { FaLinkedin, FaGithub, FaArrowUp  } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Show/hide the scroll-to-top button when scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                document.body.classList.add('scrolled');
            } else {
                document.body.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer>
            <p>&copy; {currentYear} Nafiz Mazumder.</p>
            <ul>
                <li><a href="https://www.linkedin.com/in/yourprofile" target="_blank"
                       rel="noopener noreferrer"><FaLinkedin/></a></li>
                <li><a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub/></a></li>
            </ul>
            <button onClick={scrollToTop} className="scroll-to-top">
                <FaArrowUp className="scroll-to-top-icon"/>
            </button>
        </footer>
    );
};

export default Footer;
