import ShowPhoto from './ShowPhoto';
import { useState } from 'react';
import image2 from './Assets/butterfly2.png';
import Navigation from './Navigation';
export default () => {
    const [noResult, setNoResult] = useState(null);

    const [search, setSearch] = useState('cat');
    const randomList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
            <Navigation />
            <section id='inputBox'>
                <input
                    onKeyDown={(e) => {
                        e.key === 'Enter' ? setSearch(e.target.value) : 'pass';
                    }}
                    placeholder='Write anything then press Enter'
                />

                <img src={image2} />
            </section>
            <main>
                {randomList.map((item, index) => (
                    <ShowPhoto
                        key={index}
                        index={item}
                        search={search}
                        state={'buy'}
                        noResult={noResult}
                        setNoResult={setNoResult}
                    />
                ))}
                <h1>{noResult}</h1>
            </main>
        </>
    );
};
