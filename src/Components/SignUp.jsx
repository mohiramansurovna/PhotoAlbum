import { Link } from 'react-router-dom';
import image3 from './Assets/butterfly3.png';
import { useContext, useState } from 'react';
import { CurrentUser, NewUser, PasswordContext, UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import NavHome from './NavHome';
export default () => {
    const [error, setError] = useState([
        'Your password should be at least 8 characters',
        '',
    ]);
    const [email, setEmail] = useState('');
    const [temporary, setTemporary] = useState('');
    const [confirmed, setConfirmed] = useState('');
    const { users, setUsers } = useContext(UserContext);
    const { user, setUser } = useContext(CurrentUser);
    const { newUser, setNewUser } = useContext(NewUser);
    const { password, setPassword } = useContext(PasswordContext);
    const navigate = useNavigate();
    function send() {
        if (temporary !== confirmed) {
            setError([
                'Password and confirmend password are not matched',
                'red',
            ]);
        } else if (temporary.length < 8) {
            setError([
                'Hey dude I told u it should be at least 8 characters write more',
                'red',
            ]);
        } else if (users.some((item) => item == email)) {
            setError([
                'Username is already taken, please choose another one',
                'red',
            ]);
        } else {
            setUsers([...users, email]);
            setUser(email);
            setNewUser(email);
            setPassword(temporary);
            navigate('/PhotoAlbum/signIn');
        }
    }
    return (
        <>
            <NavHome />
            <form>
                <div>
                    <h1>Sign up</h1>
                    <img src={image3} />
                </div>
                <label>Username</label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                    placeholder='example123.gmail.com'
                />
                <label>
                    Password <br />
                    <span style={{ color: error[1] }}>{error[0]}</span>
                </label>
                <input
                    onChange={(e) => setTemporary(e.target.value)}
                    type='password'
                    placeholder='Your password'
                />
                <label>Confirm your password</label>
                <input
                    onChange={(e) => setConfirmed(e.target.value)}
                    type='password'
                    placeholder='Your password'
                />
                <div>
                    <button>
                        <Link id='formLink' to='/PhotoAlbum/'>
                            Cancel
                        </Link>
                    </button>
                    <button type='button' onClick={send}>
                        Sign Up
                    </button>
                </div>

                <p>
                    Already have an account? <Link id='pLink' to='/PhotoAlbum/signIn'>Sign In</Link>
                </p>
            </form>
        </>
    );
};
