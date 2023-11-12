import React from 'react';
//import { HashRouter as Router, Route, Switch } from "react-router-dom";   // Before: version 5
import { HashRouter as Router, Route, Routes } from "react-router-dom";     // After : version 6
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({ isLoggedIn }) => {
    return (
            <div>
                <Router>
                    <Routes> {/* v6부터는 Switch 대신 Routes 사용 */}
                    {isLoggedIn ? (
                        <Route path="/" element={<Home/>} /> 
                    ) : (
                        /* 로그인안하면 Auth로 */
                        <Route path="/" element={<Auth/>} />
                    )}
                    </Routes> 
                </Router>
                {/* // v5
                    <Router>
                        <Switch> 
                            {isLoggedIn ? (
                                <Route exact path="/"> 
                                    <Home />
                                </Route>
                            ) : (
                                <Route exact path="/">
                                    <Auth />
                                </Route>
                            )}
                            </Switch>  // Switch 사용시 여러 가지 Route 중 하나만 랜더링 할 수 있게 해준다.
                        </Switch> 
                    </Router>
                */}
            </div>
            /* comment.. */
        )
};

export default AppRouter;