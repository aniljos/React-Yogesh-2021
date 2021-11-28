import { AppTheme } from "./AppTheme";
import {useReducer} from 'react';

const initThemeState = {
    mode: 'light'
 }

 const reducer = (currentState, action)=> {

    if(action.type === "DARK"){
        return {
            mode: 'dark'
        }
    }
    if(action.type === "LIGHT"){
        return {
            mode: 'light'
        }
    }
    return currentState;
 }

function AppThemeProvider(props){

    const [state, dispatch ] = useReducer(reducer, initThemeState);

    return (
        <AppTheme.Provider value={{state: state, dispatch: dispatch}}>
                {props.children}
        </AppTheme.Provider>
    )
}

export default AppThemeProvider;