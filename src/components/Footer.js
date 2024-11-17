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
            <p>&copy; {currentYear} Nafiz Mazumder.
                <a href="https://www.flaticon.com/free-icon/developer_2572713?related_id=2572711&origin=search"
                   title="Favicon"
                   target="_blank" rel="noopener noreferrer"> Favicon by Pixel perfect - Flaticon.
                </a>
                <a href="https://www.freepik.com/free-vector/abstract-background-with-artificial-intelligence-elements_6082055.htm#fromView=search&page=3&position=19&uuid=04af831a-0e8d-4714-b0a3-b0d7b4699bc8&new_detail=true"
                   title="Background"
                   target="_blank" rel="noopener noreferrer"> Background by Freepik.
                </a>
            </p>
            <ul>
                <li><a href="https://www.linkedin.com/in/nafiz-mazumder"
                       title="LinkedIn"
                       target="_blank"
                       rel="noopener noreferrer"><FaLinkedin/></a></li>
                <li><a href="https://github.com/nafizMazumder"
                       title="GitHub"
                       target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                </li>
            </ul>
            <button onClick={scrollToTop} title="Scroll to top" className="scroll-to-top">
                <FaArrowUp className="scroll-to-top-icon"/>
            </button>
        </footer>
    );
};

export default Footer;
