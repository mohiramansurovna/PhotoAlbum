import { useContext, useState } from 'react';
import { SavedContext } from '../App';
import Navigation from './Navigation';
export default (props) => {
    const [cost, setCost] = useState(props.cost);
    const [title, setTitle] = useState(props.title);
    const [url, setUrl] = useState(props.url);
    const { saved, setSaved } = useContext(SavedContext);
    const handleBuy = () => {
        if (
            !saved.some(
                (item) =>
                    item.cost === cost &&
                    item.title === title &&
                    item.url === url
            )
        ) {
            setSaved([...saved, { cost: cost, title: title, url: url }]);
            props.setDisplay('none');
        } else {
            alert('U alredy bought this item');
        }
    };
    return (
        <>
            <aside style={{ display: props.display }}>
                <section>
                    <img src={url} />
                    <h3>{title}</h3>
                </section>
                <section>
                    <h3>Cost: ${cost}</h3>
                    <button onClick={handleBuy}>Buy</button>
                    <button
                        onClick={() => {
                            props.setDisplay('none');
                        }}
                    >
                        Cancel
                    </button>
                </section>
            </aside>
        </>
    );
};
