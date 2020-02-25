/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {Router, Scene, Stack} from "react-native-router-flux";
//import screen
import ScreenHome from "./screens/Home";
import ScreenSignIn from "./screens/SignIn";
import ScreenSettings from "./screens/SettingsPage";

const App: () => React$Node = () => {
    return (
        <>
        <Router>
            <Scene key="root">
                <Scene hideNavBar={true} key={'home'} component={ScreenHome} initial/>
                <Scene hideNavBar={true} key={'signin'} component={ScreenSignIn}/>
                <Scene hideNavBar={true} key={'settings'} component={ScreenSettings}/>
            </Scene>
        </Router>
        </>
    );
};

export default App;
