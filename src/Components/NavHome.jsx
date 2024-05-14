import { NavLink } from 'react-router-dom';
import image from './Assets/butterfly1.png';
export default () => {
    return (
        <header>
            <img src={image} />
            <h1>Photo Album</h1>
            <nav>
                <NavLink
                    className={({ isActive }) => {
                        return isActive ? 'navLink active' : 'navLink';
                    }}
                    to='/'
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) => {
                        return isActive ? 'navLink active' : 'navLink';
                    }}
                    to='/signUp'
                >
                    Sign Up
                </NavLink>
                <NavLink
                    className={({ isActive }) => {
                        return isActive ? 'navLink active' : 'navLink';
                    }}
                    to='/signIn'
                >
                    Sign In
                </NavLink>
            </nav>
        </header>
    );
};
