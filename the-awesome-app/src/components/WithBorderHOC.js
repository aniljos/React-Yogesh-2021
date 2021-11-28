
//HOC ==> is a function which returns a component
const withBorder = (Component) => {

    //return a component
    return (props) => {

        return (
            <div style={{border: "2px solid red"}}>
                <Component {...props}/>
            </div>
        )
    }
}

export default withBorder;