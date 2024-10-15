// ToDoForm.jsx
import React from 'react';
import { View, TextInput, Button } from 'react-native';

const ToDoForm = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginTop: 20 }}>
      <TextInput
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: '#ccc',
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginRight: 10,
        }}
        placeholder="Add a new task..."
      />
      <Button title="Add" />
    </View>
  );
};

export default ToDoForm;

