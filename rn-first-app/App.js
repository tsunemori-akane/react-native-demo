import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import React, { useState } from 'react';
import GoalItem from './components/Goalitem';
import GoalInput from './components/Goalinput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {id: Math.random().toString(), value: goalTitle}
    ]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }
  return (
   
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)}></Button>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}></GoalInput>
      <View>
        <FlatList  
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData =>  (
          <GoalItem
          id={itemData.item.id}
           onDelete={removeGoalHandler} 
           title={itemData.item.value}></GoalItem>
        )}
        />
      </View>
        {/* <StatusBar style="auto" /> */}
    </View>
   
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  
  
});
