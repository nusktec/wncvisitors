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
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import SweetAlert from "react-native-sweet-alert";

const signResponse = {
    status: '',
    message: '',
    pin: '',
};
let errorLib = null;

class SignIn extends React.Component<> {

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            telephone: '',
            officeId: '',
            purpose: '',
            rpin: '',
            api1: '',
            error: 'complete form to sign in ?'
        };
        //load default settings
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
    signIn = () => {
        let d = {
            email: this.state.email,
            fullName: this.state.fullName,
            telephone: this.state.telephone,
            purpose: this.state.purpose,
            officeId: this.state.officeId
        };
        if (d.email === '' || d.fullName === '' || d.officeId === '' || d.purpose === '' || d.telephone === '') {
            this.showError("Incomplete field(s)");
            return;
        }
        //begin signing
        this.showError("Please wait...");
        //call network
        axios.post(this.state.api1 + "/v_signin", d)
            .then(res => {
                let d = res.data;
                if (d.status) {
                    SweetAlert.showAlertWithOptions({
                            title: 'Your PIN: ' + d.pin,
                            subTitle: d.message,
                            confirmButtonTitle: 'OK',
                            confirmButtonColor: '#000',
                            otherButtonColor: '#dedede',
                            style: 'success',
                            cancellable: false
                        },
                        callback => console.log('callback'));
                    this.setState({
                        fullName: '', telephone: '', purpose: '', officeId: '', email: '', rpin: d.pin
                    });
                    this.showError(d.message)
                } else {
                    this.showError(d.message);
                }
            })
            .catch(err => {
                console.log(err);
                this.showError("Network glitched...")
            })
    }
    ;

    showError = (msg) => {
        errorLib = null;
        let ctx = this;
        ctx.setState({error: msg});
        errorLib = setTimeout(() => {
            ctx.setState({error: 'Complete the form and continue.'});
        }, 5000);
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
                            <View style={{
                                backgroundColor: '#da2a35',
                                height: 22,
                                justifyContent: 'center',
                                paddingLeft: 5
                            }}>
                                <Text color={'white'} bold>Please Verify Your Identity...</Text>
                            </View>
                            <View style={styles.body}>
                                <Text h3 style={styles.hspace}>Sign Auth.</Text>
                                <Text h6 bold color={'red'} style={styles.hspace}>{this.state.error}</Text>
                                <Input placeholder="Fullname"
                                       label={'Fullname'}
                                       right
                                       icon="user"
                                       family="feather"
                                       iconSize={14}
                                       color={'black'}
                                       value={this.state.fullName}
                                       onChangeText={(txt) => this.setState({fullName: txt})}
                                       style={{width: 250}}
                                       iconColor="grey"/>

                                <Input placeholder="Email Address"
                                       label={'Email Address'}
                                       right
                                       icon="mail"
                                       family="feather"
                                       iconSize={14}
                                       color={'black'}
                                       type={'email-address'}
                                       value={this.state.email}
                                       onChangeText={(txt) => this.setState({email: txt})}
                                       style={{width: 250}}
                                       iconColor="grey"/>

                                <Input placeholder="Purpose Of Visit"
                                       label={'Purpose'}
                                       right
                                       icon="meh"
                                       family="feather"
                                       iconSize={14}
                                       color={'black'}
                                       value={this.state.purpose}
                                       onChangeText={(txt) => this.setState({purpose: txt})}
                                       style={{width: 250}}
                                       iconColor="grey"/>

                                <Input placeholder="Phone No."
                                       label={'Phone'}
                                       right
                                       icon="phone"
                                       family="feather"
                                       type={'phone-pad'}
                                       iconSize={14}
                                       color={'black'}
                                       value={this.state.telephone}
                                       onChangeText={(txt) => this.setState({telephone: txt})}
                                       style={{width: 250}}
                                       iconColor="grey"/>

                                <Input placeholder="Office ID"
                                       label={'ID No.'}
                                       right
                                       icon="tag"
                                       family="feather"
                                       iconSize={14}
                                       color={'black'}
                                       type={'numeric'}
                                       value={this.state.officeId}
                                       onChangeText={(txt) => this.setState({officeId: txt})}
                                       style={{width: 250}}
                                       iconColor="grey"/>

                                <Button onPress={() => this.signIn()} round size="small" color="error"
                                        style={styles.hspace}>Sign In </Button>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}
;

const
    styles = StyleSheet.create({
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

export
default
SignIn;
