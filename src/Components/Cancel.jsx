import { useContext, useState } from 'react';
import { SavedContext } from '../App';
export default (props) => {
    const [cost, setCost] = useState(props.cost);
    const [title, setTitle] = useState(props.title);
    const [url, setUrl] = useState(props.url);
    const { saved, setSaved } = useContext(SavedContext);
    const handleRemove = () => {
        if (
            saved.some(
                (item) =>
                    item.cost === cost &&
                    item.title === title &&
                    item.url === url
            )
        ) {
            setSaved(
                saved.filter((item) => {
                    return !(
                        item.cost == cost &&
                        item.title == title &&
                        item.url == url
                    );
                })
            );
            props.setDisplay('none');
        } else {
            alert('U alredy removed this item');
        }
    };
    return (
        <aside style={{ display: props.display }}>
            <section>
                <img src={url} />
                <h3>{title}</h3>
            </section>
            <section>
                <h3>Cost: ${cost}</h3>
                <button onClick={handleRemove}>Remove</button>
                <button
                    onClick={() => {
                        props.setDisplay('none');
                    }}
                >
                    Cancel
                </button>
            </section>
        </aside>
    );
};
