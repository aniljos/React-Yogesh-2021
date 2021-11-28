import React, { useState, Suspense } from "react";
import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { routes } from '../routes';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';


const drawerWidth = 240;

function AppNavigationList(props) {

    const history = useHistory();
    const {renderSecure} = props;

    function navigate(item) {

        history.push(item.path);
        props.onSelect(false);
    }

    return (
        <List>
            {routes.map((item, index) => {

                
                if (renderSecure === "N" && item.secure === false) {
                    return (
                        <ListItem button key={index} onClick={() => { navigate(item) }}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItem>
                    )
                }
                else if (renderSecure === "Y" && item.secure === true) {
                    return (
                        <ListItem button key={index} onClick={() => { navigate(item) }}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItem>
                    )
                }
                else {
                    return null
                }
            })}
        </List>
    );

}

function App(props) {

    const [drawerState, setDrawerState] = useState(false);

    

    return (

        <Router>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={() => setDrawerState(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                React
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                            },
                        }}
                        variant="temporary"
                        anchor="left"
                        open={drawerState}
                        onClose={() => setDrawerState(false)}
                    >

                        <IconButton onClick={() => setDrawerState(false)}>
                            <ChevronLeftIcon />
                            {/* {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
                        </IconButton>

                        <Divider />
                            <AppNavigationList onSelect={setDrawerState} renderSecure="N"/>
                        <Divider />
                            <AppNavigationList onSelect={setDrawerState} renderSecure="Y"/>
                        {/* <List>
                            {routes.map((item, index) => {

                                if (item.secure === true) {
                                    return (
                                        <ListItem button key={index}>
                                            <ListItemIcon>
                                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                            </ListItemIcon>
                                            <ListItemText primary={item.title} />
                                        </ListItem>
                                    )
                                }
                                else {
                                    return null;
                                }
                            })}
                        </List> */}
                    </Drawer>
                </Grid>

                <Grid item xs={12}>

                    <Suspense fallback={<div>Loading....</div>}>
                        {routes.map((item, index) => {

                            if (item.secure === false) {
                                return (
                                    <Route path={item.path} component={item.component} />
                                );
                            }
                            else {
                                return (
                                    <ProtectedRoute path={item.path} component={item.component} />
                                );
                            }
                        })}
                    </Suspense>
                </Grid>
            </Grid>
        </Router>

    )

}

export default App;