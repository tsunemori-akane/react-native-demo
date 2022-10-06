import React , { useCallback, useEffect, useState }from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOver';

//import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';


// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans-italic': require('./assets/fonts/OpenSans-Italic.ttf'),
//     'open-sans-semibold': require('./assets/fonts/OpenSans-Semibold.ttf'),
//     'AlexBrush-Regular' : require('./assets/fonts/AlexBrush-Regular.ttf')
//   })
// };

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  //const [dataLoaded, setDataLoaded] = useState(false);

  // if(!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts} 
  //       onFinish={() => setDataLoaded(true)}
  //       onError={(err) => console.log(err)}
  //     />
  //   )
  // }

  const [fontsLoaded] = useFonts({
    'OpenSans-Italic': require('./assets/fonts/OpenSans-Italic.ttf'),
    'OpenSans-Semibold': require('./assets/fonts/OpenSans-Semibold.ttf'),
    'AlexBrush-Regular' : require('./assets/fonts/AlexBrush-Regular.ttf')
  })

  const onLayoutRootView = useCallback( async() => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if(!fontsLoaded) {
    return null
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>

  if(userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  }  else if(guessRounds > 0) {
    content = (
      <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onRestart={configureNewGameHandler}/>
    )
  }

  return (
   <SafeAreaView style={{flex: 1}}>
    <View style={styles.screen} onLayout={onLayoutRootView}>
      <Header title="Guess a Number"></Header>
      {content}
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
