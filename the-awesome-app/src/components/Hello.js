import withBorder from "./WithBorderHOC";

function Hello(props){
    return (
        <div>
            <h3>Hello React</h3>
            <p>Message: {props.message.toUpperCase()}</p>
            <p>Created DateTime: {new Date().toISOString()}</p>
        </div>
    );
}

export default withBorder(Hello);