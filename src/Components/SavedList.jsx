import PhotoAPI from './PhotoAPI';
import Cancel from './Cancel';
import { useState } from 'react';
export default (props) => {
    const [display, setDisplay] = useState('none');
    return (
        <div>
            <PhotoAPI
                url={props.photo.url}
                clickFunction={() => {
                    setDisplay('flex');
                }}
                errorFunction={() => {
                    console.log('error function is working on savedList');
                }}
            />
            {display === 'flex' && (
                <Cancel
                    title={props.photo.title}
                    cost={props.photo.cost}
                    url={props.photo.url}
                    display={display}
                    setDisplay={setDisplay}
                />
            )}
        </div>
    );
};
