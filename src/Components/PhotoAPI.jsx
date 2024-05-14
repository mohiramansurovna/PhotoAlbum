export default (props) => {
    return (
        <img
            src={props.url}
            onClick={props.clickFunction}
            onError={props.errorFunction}
        />
    );
};
