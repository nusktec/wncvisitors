/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, View, TouchableOpacity, Image} from "react-native";
import Header from "./../components/Headers";
import {Button, Input, Text} from "galio-framework";
import {Actions} from 'react-native-router-flux';

class Home extends React.Component<props> {

    constructor(props){
        super(props);
        this.state = {
            dialog: false,
            pin: '',
        }
    }

    //btn sign out
    signOut = (pin) => {

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
                            <Header />
                            <View style={{
                                backgroundColor: '#da2a35',
                                height: 22,
                                justifyContent: 'center',
                                paddingLeft: 5
                            }}>
                                <Text color={'white'} bold>Please Verify Your Identity...</Text>
                            </View>
                            <View style={styles.body}>
                                <Image style={{width: 120, height: 80}} resizeMode={'contain'} source={require('./../assets/wnc.jpg')}/>
                                <Text h3 style={styles.hspace}>Staff Only</Text>
                                <Text h5 style={styles.hspace}>to sign out ?</Text>
                                <Input placeholder="Staff PIN"
                                       label={'Enter Issued PIN'}
                                       right
                                       icon="user"
                                       family="feather"
                                       iconSize={14}
                                       style={{width: 250}}
                                       iconColor="grey"
                                       onChangeText={(txt)=>{
                                           this.setState({pin: txt})
                                       }}
                                       value={this.state.pin}/>

                                <Button onPress={() => this.signOut(this.state.pin)} round size="small" color="error"
                                        style={styles.hspace}>Sign Out </Button>

                                <TouchableOpacity style={styles.hspace} onPress={()=>{
                                    Actions.signin();
                                }}>
                                    <Text h6 bold color={'#464646'} style={{padding: 10}}>Have not signed in ? Click Here {this.state.pin}</Text>
                                </TouchableOpacity>
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
