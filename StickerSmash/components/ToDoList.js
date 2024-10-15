// ToDoList.jsx
import React from 'react';
import { ScrollView, Pressable, View, Text } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={[{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }, task.completed && { backgroundColor: '#e0e0e0' }]}>
            <Text style={{ fontSize: 16 }}>{task.text}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default ToDoList;

