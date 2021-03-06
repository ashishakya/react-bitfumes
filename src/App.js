import React, {useEffect, useState} from "react";
import "./assets/css/style.css"
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import routes from "./utils/routes";
import Header from "./components/Header";
import firebase from "./config/firebase";
import AppContext from "./store/AppContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import NotFound from "./Pages/404";

/*
class App extends React.Component {
    constructor(props) {
        {
            console.log('app constructor')
            super(props);
            this.state = {title: "Hello from Class Component", isShowing: false}
            // this.handleClick = this.handleClick.bind(this);
        }
    }

    handleClick = () => {
        this.setState({isShowing: !this.state.isShowing})
    }

    componentDidMount() {
        console.log('app mounted')
        // this.setState({title:"title from componentDidMount"})
    }

    componentDidUpdate() {
        // this method is called when this component is updated
        console.log("app updated")
    }


    // handleClick(){
    //         this.setState({isShowing: !this.state.isShowing})
    // }

    // states are immutable. we can directly update it.

    render() {
        console.log('app render')

        return (
            <section className="flex justify-center">
                <div className="w-1/2">
                    <div className="text-center">
                        <div className="my-4">{this.state.title}</div>
                        <button className="p-1 bg-blue-700 text-white my-2" onClick={this.handleClick}>Toggle Image</button>
                    </div>
                    {this.state.isShowing ? <Images/> : null}
                </div>
            </section>
        )
    }
}
*/

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false );
    const [user, setUser] = useState({});

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setIsLoggedIn(true)
                setUser(user)
            } else {
                setUser({})
                setIsLoggedIn(false)
            }
        })
    }, [])

    return (
        <Router>
            <AppContext.Provider value={[isLoggedIn, user]}>
                <Header/>
                <Switch>
                    {
                        routes.map((route, index) => {
                            if (route.protected === 'guest') {
                                return <GuestRoute
                                    path={route.path}
                                    exact={route.exact}
                                    key={index}
                                    component={route.component}
                                />
                            }

                            if (route.protected === 'auth') {
                                return <AuthRoute
                                    path={route.path}
                                    exact={route.exact}
                                    key={index}
                                    component={route.component}
                                />
                            }

                            return (
                                <Route path={route.path}
                                       exact={route.exact}
                                       key={index}
                                       component={route.component}
                                />
                            )
                        })
                    }

                    <Route path="*">
                            <NotFound />
                    </Route>

                    )
                    {/*<Route path="/" exact={true}>*/}
                    {/*    <Home/>*/}
                    {/*</Route>*/}
                    {/*<Route path="/gallery">*/}
                    {/*    <Gallery/>*/}
                    {/*</Route>*/}
                    {/*<Route path="/login">*/}
                    {/*    <Login/>*/}
                    {/*</Route>*/}
                </Switch>
            </AppContext.Provider>
        </Router>
    )
}

export default App;
