// index.js
/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App'; // Import the main App component
import { name as appName} from './app.json'; // Import app name from app.json

// Register the main application component
AppRegistry.registerComponent(appName, () => App);