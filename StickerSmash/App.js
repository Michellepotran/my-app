
/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './StickerSmash/components/ToDoList';
import ToDoForm from './StickerSmash/components/ToDoForm';

function App() {
  const tasks = [
    { text: "Do laundry", completed: true },
    { text: "Go to gym", completed: false },
    { text: "Walk dog", completed: true },
  ];

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default App;
