import Album from './Components/Album';
import Home from './Components/Home';
import Buy from './Components/Buy';
import Saved from './Components/Saved';
import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Components/styles/Main.css';
import Footer from './Components/Footer';
import About from './Components/About';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Modechanger from './Components/Modechanger';

export const CurrentUser = React.createContext({ user: '' });
export const NewUser = React.createContext({ newUser: '' });
export const SavedContext = React.createContext({
    saved: [],
    setSaved: () => {},
});
export const UserContext = React.createContext({
    users: [],
    setUsers: () => {},
});
export const PasswordContext = React.createContext({
    password: '',
    setPassword: () => {},
});
function App() {
    const [user, setUser] = useState('');
    // Users
    const [users, setUsers] = useState(() => {
        const storageData = localStorage.getItem('users');
        return storageData ? JSON.parse(storageData) : ['first'];
    });
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    // Password

    const [password, setPassword] = useState(() => {
        const storageData = localStorage.getItem(user);
        return storageData ? JSON.parse(storageData) : '';
    });
    useEffect(() => {
        localStorage.setItem(user, JSON.stringify(password));
    }, [password, user]);

    // Saved can be collected as an object {user:user, saved:[]}

    const [saved, setSaved] = useState(() => {
        const storageData = localStorage.getItem('saved_' + user);
        return storageData ? JSON.parse(storageData) : [];
    });
    const [newUser, setNewUser] = useState([]);
    useEffect(() => {
        const storageData = localStorage.getItem('saved_' + user);
        if (!storageData) {
            setSaved([]);
        }
    }, [newUser]);

    useEffect(() => {
        const storageData = localStorage.getItem('saved_' + user);
        if (storageData) {
            setSaved(JSON.parse(storageData));
        }
    }, [user]);

    useEffect(() => {
        localStorage.setItem('saved_' + user, JSON.stringify(saved));
    }, [saved, user]);
    return (
        <UserContext.Provider value={{ users: users, setUsers: setUsers }}>
            <CurrentUser.Provider value={{ user: user, setUser: setUser }}>
                <NewUser.Provider
                    value={{ newUser: newUser, setNewUser: setNewUser }}
                >
                    <PasswordContext.Provider
                        value={{ password: password, setPassword: setPassword }}
                    >
                        <SavedContext.Provider
                            value={{ saved: saved, setSaved: setSaved }}
                        >
                            <Modechanger />
                            <Routes>
                                <Route path='/PhotoAlbum/' element={<Home />} />
                                <Route
                                    path='/PhotoAlbum/search'
                                    element={<Album />}
                                />
                                <Route
                                    path='/PhotoAlbum/buy'
                                    element={<Buy />}
                                />
                                <Route
                                    path='/PhotoAlbum/saved'
                                    element={<Saved />}
                                />
                                <Route
                                    path='/PhotoAlbum/about'
                                    element={<About />}
                                />
                                <Route
                                    path='/PhotoAlbum/signUp'
                                    element={<SignUp />}
                                />
                                <Route
                                    path='/PhotoAlbum/signIn'
                                    element={<SignIn />}
                                />
                            </Routes>
                            <Footer />
                        </SavedContext.Provider>
                    </PasswordContext.Provider>
                </NewUser.Provider>
            </CurrentUser.Provider>
        </UserContext.Provider>
    );
}
export default App;
