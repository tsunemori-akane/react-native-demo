import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible= {props.visible} animationType="slide"> 
            <View style={styles.inputContainer}>
                <TextInput placeholder='Course Goal' style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='CNACEL' color="red" onPress={props.onCancel}></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title='Add' onPress={addGoalHandler}></Button>
                    </View>
                </View>
            </View>
        </Modal>
        
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    input: {
        width:'80%',
        borderColor: '#000',
        padding: 10,
        borderWidth: 2,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'

    },
    button: {
        width: '40%'
    }
})

export default GoalInput