/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';
import type {Node} from 'react';
import {StyleSheet, ImageBackground, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Text} from 'galio-framework';
import {Icon, Image} from "react-native-elements";
import {Actions} from "react-native-router-flux";

const Header = (props): Node => (
    <ImageBackground
        accessibilityRole={'image'}
        source={require('./../assets/work_space.jpeg')}
        style={styles.background}
        imageStyle={styles.logo}>
        <TouchableOpacity onPress={()=>{
            Actions.pop();
        }} style={{position: 'absolute', top: 0, left: 0, margin: 20, width: props.isback ?20:0}}>
            <Icon style={{margin: 10}} name={"arrow-back"} family="feather" size={30} color={'black'}/>
        </TouchableOpacity>
        <Text h5 bold>Welcome</Text>
        <Text h3>To Work And Connect</Text>
        <Text h6 italic>www.workandconnect.net</Text>
    </ImageBackground>
);

const styles = StyleSheet.create({
    background: {
        paddingBottom: 40,
        paddingTop: 96,
        paddingHorizontal: 32,
    },
    logo: {
        opacity: 0.3,
        overflow: 'hidden',
        resizeMode: 'cover',
        /*
         * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
         *
         * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
         * source image's size.
         */
    },
    text: {
        fontSize: 40,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default Header;
