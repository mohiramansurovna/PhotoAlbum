import { useContext } from 'react';
import { SavedContext } from '../App';
import SavedList from './SavedList';
import Navigation from './Navigation';
import image1 from './Assets/tired.png';
export default () => {
    const { saved, setSaved } = useContext(SavedContext);
    if (saved[0] ?? false) {
        return (
            <>
                <Navigation />
                <main>
                    {saved.map((item, index) => (
                        <SavedList key={index} photo={item} state={'buy'} />
                    ))}
                </main>
            </>
        );
    } else {
        return (
            <>
                <Navigation />
                <main id='home'>
                    <section style={{ borderColor: 'transparent' }}>
                        <img src={image1} />
                        <h1>You haven't saved any photo</h1>
                    </section>
                </main>
            </>
        );
    }
};
