import React from 'react';
import { View } from 'react-native';
import { Text } from '../ui'; 
// 👇 FIX: styles import karein
import { styles } from '../../styles/styles'; 

/**
 * Custom/AboutMe
 * Shows name and registration number at the top.
 * Props: name (string), regNo (string)
 */
export default function AboutMe({ name, regNo }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{name}</Text>
      <Text style={styles.headerText}>{regNo}</Text>
    </View>
  );
}