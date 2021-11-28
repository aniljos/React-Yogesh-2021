import { useContext } from "react";
import { AppTheme } from "./AppTheme";


function ThemeSwitcherButton(){

    const theme = useContext(AppTheme);

    function switchTheme(){
        if(theme.state.mode === "dark"){
            theme.dispatch({type: "LIGHT"});
            return;
        }

        if(theme.state.mode === "light"){
            theme.dispatch({type: "DARK"});
            return;
        }
    }
    return (
        <button className="btn btn-warning" onClick={switchTheme}>Switch Theme</button>
    )
}

export default ThemeSwitcherButton;