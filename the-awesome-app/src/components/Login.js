import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {createSetAuthAction} from '../redux/action-creators';
import {trackPromise} from 'react-promise-tracker';
import Input  from './Input';



function Login(props){
 
    console.log("[Login] component", props);
    const [userName, setUserName] = useState("abc");
    const [password, setPassword] = useState("abc@123");
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    // const [state, setState] = useState({
    //     userName: "", password: ""
    // });

    //useEffect(fn{callback}, [dependencies])
    useEffect(() => {
        console.log("This is a useEffect similar to the componentDidMount");

        return () => {
            console.log("This is a useEffect similar to the componentWillUnMount");
        }
    }, []);

    useEffect(() => {

        console.log("This is a useEffect similar to the componentDidUpdate(userName)");

    }, [userName]);

    useEffect(() => {

        console.log("This is a useEffect similar to the componentDidUpdate(password)");

    }, [password]);

    useEffect(() => {

        console.log("This is a useEffect similar to the componentDidUpdate(userName,password)");

    }, [userName, password]);



    async function login(){
        console.log(`userName: ${userName}, password: ${password}`);
        try {
            const url = process.env.REACT_APP_LOGIN_URL;
            const response 
                = await trackPromise(axios.post(url, {name: userName, password: password}));
            console.log(response);
            // dispatch({type: "SET_AUTH", payload: {
            //     isAuthenticated: true,
            //     accessToken: response.data.accessToken,
            //     refreshToken: response.data.refreshToken
            // }});
            dispatch(createSetAuthAction({
                    isAuthenticated: true,
                    accessToken: response.data.accessToken,
                    refreshToken: response.data.refreshToken
            }));
            setMessage("");
            props.history.push("/gadgets");

        } catch (error) {
            console.log("Login Error", error);
            setMessage("Invalid Credentials");
            dispatch(createSetAuthAction( {
                isAuthenticated: false,
                accessToken: "",
                refreshToken: ""
            }));
        }

    }
    return (
        <div>
            <h4>Login</h4>
            <p></p>
            {message ? <div className="alert alert-danger">
                {message}
            </div> : null}

            <Input value={userName} onChange={(e) => {setUserName(e.target.value)}}/>
            <Input value={password} onChange={e => setPassword(e.target.value)}/>

            {/* <div className="form-group">
                <label>UserName</label>
                <input className="form-control" value={userName} 
                                onChange={(e) => {setUserName(e.target.value)}}/>
            </div>
            

            <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password" value={password}
                            onChange={e => setPassword(e.target.value)}/>
            </div> */}
            <br/>
            <div>
                <button className="btn btn-success" onClick={login}>Login</button>
            </div>
        </div>
    );
}
export default Login;