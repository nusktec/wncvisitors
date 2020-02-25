/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, View} from "react-native";
import Header from "./../components/Headers";
import {Button, Input, Text} from "galio-framework";
import Toast from "react-native-simple-toast";
import AsyncStorage from "@react-native-community/async-storage";

class SignIn extends React.Component<props> {

    constructor(props) {
        super(props);
        this.state = {
            api1: "",
            api2: ""
        };
        //load main
        this.loadSettings();
    }

    //saved_settings
    loadSettings = async () => {
        try {
            const api = await AsyncStorage.getItem("@api");
            if (api !== null) {
                this.setState({api1: api})
            } else {
                this.setState({api1: "http://192.168.8.1/no_api_link"})
            }
        } catch (err) {
            //Dump error here
            Toast.show('Unable to load settings...');
        }
    };

    //btn sign out
    save_settings = async () => {
        try {
            await AsyncStorage.setItem("@api", this.state.api1);
            Toast.show('Saved, please restart app');
        } catch (err) {
            Toast.show('Unable to save settings...');
        }
    };

    render() {
        return (
            <View>
                <StatusBar barStyle="light-content" backgroundColor={'black'}/>
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Header isback/>
                            <View style={styles.body}>
                                <Text h5 bold style={styles.hspace}>SERVER SETTINGS</Text>
                                <Input placeholder="http://192.168.8.1/"
                                       label={'Base Api Url (No trailing /)'}
                                       right
                                       icon="link"
                                       family="feather"
                                       iconSize={14}
                                       color={'black'}
                                       style={{width: 250}}
                                       onChangeText={(txt) => {
                                           this.setState({api1: txt})
                                       }}
                                       value={this.state.api1}
                                       iconColor="grey"/>

                                <Button onPress={() => this.save_settings()} round size="small" color="error"
                                        style={styles.hspace}>Save Settings </Button>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}
;

const styles = StyleSheet.create({
    hspace: {
        marginVertical: 5
    },
    scrollView: {
        backgroundColor: 'white',
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default SignIn;
