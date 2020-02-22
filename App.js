/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar, TouchableOpacity, Button,
} from 'react-native';
import Header from "./comp/Headers";
import {Input, Text} from "galio-framework";

const App: () => React$Node = () => {
    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor={'black'}/>
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Header  />
                    <View style={{backgroundColor: '#da2a35', height: 22, justifyContent: 'center', paddingLeft: 5}}>
                        <Text color={'white'} bold>Please Verify Your Identity...</Text>
                    </View>
                    <View style={styles.body}>


                    </View>
                    <View style={{height: 40, backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5}}>
                       
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: 'white',
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

export default App;
