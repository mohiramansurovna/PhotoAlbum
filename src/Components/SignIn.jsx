import { Link } from 'react-router-dom';
import image3 from './Assets/butterfly3.png';
import { useContext, useState } from 'react';
import { UserContext, CurrentUser } from '../App';
import { useNavigate } from 'react-router-dom';
import NavHome from './NavHome';
export default () => {
    const [error, setError] = useState([
        'Your password should be at least 8 characters',
        'initial',
    ]);
    const [email, setEmail] = useState('');
    const [temporary, setTemporary] = useState('');
    const { users, setUsers } = useContext(UserContext);
    const { user, setUser } = useContext(CurrentUser);
    const navigate = useNavigate();
    function send() {
        if (temporary !== JSON.parse(localStorage.getItem(email))) {
            setError(['Incorrect Password', 'red']);
        } else if (!users.some((item) => item == email)) {
            setError(['Incorrect Username', 'red']);
        } else {
            setUser(email);
            navigate('/PhotoAlbum/search');
        }
    }
    return (
        <>
            <NavHome />
            <form>
                <div>
                    <h1>Sign In</h1>
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
                <div>
                    <button>
                        <Link id='formLink' to='/'>
                            Cancel
                        </Link>
                    </button>
                    <button type='button' onClick={send}>
                        Sign In
                    </button>
                </div>
                <p>
                    Don't have an account <Link to='/PhotoAlbum/signUp'>Sign Up</Link>
                </p>
            </form>
        </>
    );
};
