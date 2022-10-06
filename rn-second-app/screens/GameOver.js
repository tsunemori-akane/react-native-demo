import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView} from 'react-native'
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText>The Game is Over!</TitleText>
                <View style={styles.imageContainer}>
                    <Image fadeDuration={300} resizeMod='cover' source={require('../assets/success.png')} style={styles.image}/>
                </View>
                <View style={styles.resultContainer}>
                    <BodyText style={styles.resultText}>Your phone need the number of rounds:
                        <Text style={styles.hightlight}>{props.roundsNumber}</Text>
                        ... And, The Assuming Number Was: 
                        <Text style={styles.hightlight}>{props.userNumber}</Text>
                    </BodyText>
                </View>
                
                <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex :1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderWidth: 2 ,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    hightlight: {
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center'
    },
    resultContainer: {
        marginHorizontal: 20,
        marginVertical: Dimensions.get('window').height / 60
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16: 20
    }
})
export default GameOverScreen;