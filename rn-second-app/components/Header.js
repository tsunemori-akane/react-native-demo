import React from 'react';
import { View, Text, StyleSheet, Platform} from 'react-native'
import Colors from '../constants/colors'
import TitleText from './TitleText';

const Header = props => {
    return (
        <View style={{
            ...styles.headerBase, 
            ...Platform.select({
                ios: styles.headerIOS, 
                android: styles.headerAndroid
            })
        }}>
            <TitleText style={styles.headerTitle}>{props.title}</TitleText>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        heoght: 90,
        paddingTop: 36,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: Platform.OS === 'android' ? Colors.primary: 'white',
        // borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
        // borderBottomWidth: Platform.OS === 'ios' ? 1 : 0
    },
    headerIOS: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc' ,
        borderBottomWidth:  1 
    },
    headerAndroid: {
        backgroundColor: Colors.primary,
        borderBottomColor: 'transparent',
        borderBottomWidth:  0
    },
    headerTitle: {
        color: Platform.OS === 'ios' ? Colors.primary : 'white',
        fontsize: 23
    }
})
export default Header;