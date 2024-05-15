import axios from 'axios';
import { useEffect, useState } from 'react';
import Buy from './Buy';
import PhotoAPI from './PhotoAPI';
export default (props) => {
    const [photo, setPhoto] = useState({});
    const [photoFallBack, setPhotoFallBack] = useState({});
    const [display, setDisplay] = useState('none');
    const [error, setError] = useState(null);
    const getPhoto = async (search) => {
        try {
            const responce = await axios.get(
                'https://api.unsplash.com/search/photos?query=' +
                    search +
                    '+&client_id=ZqpMObPlBC_AcqTgCaYurj32ok0-K6DSUUCN1xY-GU0'
            );
            if (!responce.data.results[0]) {
                props.setNoResult(
                    `Sorry, we couldn't find any photo named "${search}"`
                );
            }else{
                props.setNoResult(null);
            }
            setPhoto(responce.data.results[props.index]);
            setPhotoFallBack(
                responce.data.results[props.index + 1] ??
                    responce.data.results[props.index - 1]
            );
            setError(null);
        } catch (error) {
            setError(`Sorry, we couldn't find any photo named ${search}`);
        }
    };
    useEffect(() => {
        getPhoto(props.search);
    }, [props.search]);

    return (
        <div>
            {display === 'flex' && (
                <Buy
                    title={
                        typeof photo.alt_description !== 'undefined'
                            ? photo.alt_description
                            : null
                    }
                    cost={props.index == 0? 1: props.index}
                    url={
                        typeof photo.urls !== 'undefined'?photo.urls.full:null
                    }
                    display={display}
                    setDisplay={setDisplay}
                />
            )}
            {error ? (
                <h1>you have{error}</h1>
            ) : photo && photo.urls ? (
                <PhotoAPI
                    url={photo.urls.small ?? null}
                    clickFunction={() => {
                        setDisplay('flex');
                    }}
                    errorFunction={() => {
                        setPhoto(photoFallBack);
                    }}
                />
            ) : null}
        </div>
    );
};
