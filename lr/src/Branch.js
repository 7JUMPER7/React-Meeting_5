export default function Branch(props) {
    const name = props.match.params.name;
    return(
        <h2>Филиал: {name}</h2>
    );
}