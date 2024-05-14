import { NavLink, Link } from 'react-router-dom';
import image from './Assets/butterfly1.png';
export default () => {
    return (
        <header>
            <img src={image} />
            <h1>Photo Album</h1>
            <nav>
                <Link
                    className='navLink'
                    to='/PhotoAlbum/'
                >
                    Home
                </Link>
                <NavLink
                    className={({ isActive }) => {
                        return isActive ? 'navLink active' : 'navLink';
                    }}
                    to='/PhotoAlbum/search'
                >
                    Search
                </NavLink>
                <NavLink
                    className={({ isActive }) => {
                        return isActive ? 'navLink active' : 'navLink';
                    }}
                    to='/PhotoAlbum/saved'
                >
                    Collection
                </NavLink>
                <NavLink
                    className={({ isActive }) => {
                        return isActive ? 'navLink active' : 'navLink';
                    }}
                    to='/PhotoAlbum/about'
                >
                    About
                </NavLink>
            </nav>
        </header>
    );
};
