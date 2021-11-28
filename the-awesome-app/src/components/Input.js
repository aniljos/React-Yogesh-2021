

{/* <Input title="UserName" onChange={setUserName(e.target.value)} value={} placeholder=""*/}

function Input(props){

    const {title, ...otherProps} = props;

    return (
        <div className="form-group">
                <label>{title}</label>
                <input className="form-control" {...otherProps}/>
        </div>
    )
}

export default Input;