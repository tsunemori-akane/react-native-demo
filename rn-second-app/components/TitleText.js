import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = props => <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>

const styles = StyleSheet.create({
    title: {
        fontFamily:'AlexBrush-Regular',
        fontSize: 24
    }
});

export default TitleText;