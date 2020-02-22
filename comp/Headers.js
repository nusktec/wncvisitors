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
import {StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {Text} from 'galio-framework';

const Header = (): Node => (
    <ImageBackground
        accessibilityRole={'image'}
        source={require('./../assets/work_space.jpeg')}
        style={styles.background}
        imageStyle={styles.logo}>
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
