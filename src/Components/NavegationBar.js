import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import InsertUsers from "./InsertUsers";

const estilos = {
    nav: {
        backgroundColor: 'black',
        padding: '2px 10px',
        color: 'white',
        fontSize: '0.9rem',
        width: '100%',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        height: '50px'
    },
    li: {
        listStyleType: "none",
        color: "white",
        textDecoration: "none",
        margin: "0 4px"
    },
    ul:{
        display: "flex",
        padding: 0,
    },
    link: {
        textDecoration: 'none', 
        color: 'white',
        textTransform: "uppercase",
        letterSpacing: "2px",
        fontWeight: "bold"
    }
}

const NavegationBar = () => {
    return (
        <Router>
            <div>
                <nav style={estilos.nav}>
                    <ul style={estilos.ul}>
                        <li style={estilos.li}>
                            <Link style={estilos.link} to="/">Home</Link>
                        </li>
                        <li style={estilos.li}>
                            <Link style={estilos.link} to="/insert">Insert</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/insert">
                        <InsertUsers/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default NavegationBar
