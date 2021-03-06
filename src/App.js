import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Col } from 'react-bootstrap';
import './App.scss';
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import ProfileMain from "./pages/Profile/ProfileMain";
import UserContextProvider from './services/userContextProvider';
import SignUp from './pages/Enter/SignUp/SignUp';
import CreateAccount from './pages/Enter/CreateAccount/CreateAccForm';
import SignIn from './pages/Enter/SignIn/SignIn';
import CreateAccountSuccess from './pages/Enter/CreateAccount/CreateAccSuccess';
import LogOut from "./pages/Enter/Logout/LogOut";

function App() {

    return (
        <UserContextProvider>
            <div className="App">
                <Router>
                    <Switch>
                        <Route path="/logout">
                            <LogOut />
                        </Route>
                        <Route path="/signUp">
                            <SignUp />
                        </Route>
                        <Route path="/createAccount">
                            <CreateAccount />
                        </Route>
                        <Route path="/createAccountSuccess">
                            <CreateAccountSuccess />
                        </Route>
                        <Route path="/signIn">
                            <SignIn tab="signIn"/>
                        </Route>
                        <Route>
                            <Header className="row" dark="true"/>
                            <div className="App-content">
                                <Switch>
                                    <Route exact path="/">
                                        <Home />
                                    </Route>
                                    <Route path="/profile">
                                        <ProfileMain />
                                    </Route>
                                    <Route path="/history">
                                        <ProfileMain />
                                    </Route>
                                    <Route path="*" className="col">
                                        <Col>
                                            <h1>404</h1>
                                            <h2>Page Not Found</h2>
                                            <Link to="/">Go Home</Link>
                                        </Col>
                                    </Route>
                                </Switch>
                            </div>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </UserContextProvider>
  );
}

export default App;
