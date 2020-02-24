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

class SignIn extends React.Component<> {

    componentDidMount() {
        this.state = {
            dialog: false
        }
    }

    //btn sign out
    signIn = (pin) => {

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
                            <Header  isback/>
                            <View style={{
                                backgroundColor: '#da2a35',
                                height: 22,
                                justifyContent: 'center',
                                paddingLeft: 5
                            }}>
                                <Text color={'white'} bold>Please Verify Your Identity...</Text>
                            </View>
                            <View style={styles.body}>
                                <Text h3 style={styles.hspace}>Staff Authentication</Text>
                                <Text h6 style={styles.hspace}>complete form to sign in ?</Text>
                                <Input placeholder="Fullname"
                                       label={'Fullname'}
                                       right
                                       icon="user"
                                       family="feather"
                                       iconSize={14}
                                       style={{width: 250}}
                                       iconColor="grey"/>

                                <Input placeholder="Email Address"
                                       label={'Email Address'}
                                       right
                                       icon="mail"
                                       family="feather"
                                       iconSize={14}
                                       style={{width: 250}}
                                       iconColor="grey"/>

                                <Input placeholder="Purpose Of Visit"
                                       label={'Purpose'}
                                       right
                                       icon="meh"
                                       family="feather"
                                       iconSize={14}
                                       style={{width: 250}}
                                       iconColor="grey"/>

                                <Input placeholder="Phone No."
                                       label={'Phone'}
                                       right
                                       icon="phone"
                                       family="feather"
                                       iconSize={14}
                                       style={{width: 250}}
                                       iconColor="grey"/>

                                <Input placeholder="Office ID"
                                       label={'ID No.'}
                                       right
                                       icon="tag"
                                       family="feather"
                                       iconSize={14}
                                       style={{width: 250}}
                                       iconColor="grey"/>

                                <Button round size="small" color="error" style={styles.hspace}>Sign In </Button>
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
