import { NavLink } from 'react-router-dom';
import image from './Assets/wildflower.png';
export default () => {
    return (
        <footer>
            <h1>Unsplash</h1>
            <nav>
                {/* <NavLink to='/about'>About</NavLink>
                <NavLink to='/account'>Account</NavLink> */}
                <a href='###'>
                    <i className='fa-brands fa-facebook'></i>
                </a>
                <a href='###'>
                    <i className='fa-brands fa-square-twitter'></i>
                </a>
                <a href='###'>
                    <i className='fa-brands fa-square-instagram'></i>
                </a>
                <a href='###'>
                    <i className='fa-brands fa-linkedin'></i>
                </a>
            </nav>
            <h3>
                <i className='fa-regular fa-registered'></i> Example company
            </h3>
            <img src={image} />
        </footer>
    );
};
