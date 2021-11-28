import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppTheme } from '../context/AppTheme';
import ThemeSwitcherButton from '../context/ThemeSwitcher';

function AppHeader() {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const theme = useContext(AppTheme);
    console.log("appTheme", theme);

    return (
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <nav className={`navbar navbar-expand-lg 
                            ${theme.state.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">React</a>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/counter">Counter</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>

                    {isAuthenticated === false ? <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li> : <li className="nav-item">
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </li>}


                    <li className="nav-item">
                        <Link className="nav-link" to="/usecallback">UseCallback</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/gadgets">Gadgets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">View Cart</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/responsive">Responsive</Link>
                    </li>
                    <li>
                        <ThemeSwitcherButton/>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default AppHeader;