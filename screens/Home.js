/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView
} from "react-native";
import Header from "./../components/Headers";
import {Button, Input, Text} from "galio-framework";
import {Actions} from 'react-native-router-flux';
import {Icon} from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";
import Toast from "react-native-simple-toast";
import axios from "axios";
import SweetAlert from "react-native-sweet-alert";

let errorLib = null;
class Home extends React.Component<props> {

    constructor(props) {
        super(props);
        this.state = {
            dialog: false,
            signOutData: {pin: ''},
            error: '',
            loading: false,
            api1: '',
        };
        //load saved settings
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

    showError = (msg) => {
        errorLib = null;
        let ctx = this;
        ctx.setState({error: msg});
        errorLib = setTimeout(() => {
            ctx.setState({error: ''});
        }, 5000);
    };

    //btn sign out
    signOut = (pin) => {
        if (this.state.signOutData.pin === '') {
            this.showError("Supply PIN");
            return;
        }
        this.showError("Please wait...");
        //call network
        axios.post(this.state.api1 + "/v_signout", this.state.signOutData)
            .then(res => {
                let d = res.data;
                if (d.status) {
                    SweetAlert.showAlertWithOptions({
                            title: 'Sign Out',
                            subTitle: d.message,
                            confirmButtonTitle: 'OK',
                            confirmButtonColor: '#000',
                            otherButtonColor: '#dedede',
                            style: 'success',
                            cancellable: false
                        },
                        callback => console.log('callback'));
                    this.setState({signOutData: {pin: ''}});
                    this.showError(d.message)
                } else {
                    this.showError(d.message);
                }
            })
            .catch(err => {
                this.showError("Network glitched...")
            })
    };

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" enabled>
                <StatusBar barStyle="light-content" backgroundColor={'black'}/>
                <SafeAreaView>
                    <View style={{flexDirection: 'column'}}>
                        <Header />
                        <View style={{
                            backgroundColor: '#da2a35',
                            height: 22,
                            justifyContent: 'space-between',
                            paddingLeft: 5,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Text color={'white'} bold>Please Verify Your Identity...</Text>
                            <TouchableOpacity style={{padding: 5}} onPress={() => {
                                Actions.settings();
                            }}>
                                <Icon name="settings" family="feather" size={15} color={'white'}/>
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={{flexDirection: 'column'}}>
                            <View style={styles.body}>
                                <Image style={{width: 100, height: 80}} resizeMode={'contain'}
                                       source={require('./../assets/wnc.jpg')}/>
                                <Text h5 bold style={styles.hspace}>SIGN OUT ONLY</Text>
                                <Text h5 color={'red'} style={styles.hspace}>{this.state.error}</Text>
                                <Input placeholder="Staff PIN"
                                       label={'Enter Issued PIN'}
                                       right
                                       icon="user"
                                       family="feather"
                                       iconSize={14}
                                       style={{width: 250, fontWeight: '900'}}
                                       iconColor="grey"
                                       color={'black'}
                                       onChangeText={(txt) => {
                                           this.setState({signOutData: {pin: txt}})
                                       }}
                                       value={this.state.signOutData.pin}/>

                                <Button disabled={this.state.loading}
                                        onPress={() => this.signOut(this.state.signOutData.pin)} round size="small"
                                        color="error"
                                        style={styles.hspace}>Sign Out </Button>

                                <TouchableOpacity style={styles.hspace} onPress={() => {
                                    Actions.signin();
                                }}>
                                    <Text h6 bold color={'#464646'} style={{padding: 10}}>Not signed in ? Click
                                        Here {this.state.pin}</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    hspace: {
        marginVertical: 10
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

export default Home;
