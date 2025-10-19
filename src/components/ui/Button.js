import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { styles } from '../../styles/styles'; // Styles import kiya agar use karna ho

/**
 * Minimal UI Button (no styling on the text element itself).
 * Students style the Pressable wrapper via 'style' prop.
 */
export default function Button({ onPress, children, style, ...rest }) {
  // Agar children Text hai (jaise '+', '-'), toh uska rang styles.js mein set hona chahiye
  const isCounterButton = (children === '+' || children === '-');
  
  return (
    <Pressable onPress={onPress} style={style} {...rest}>
      {/* Text component ke liye koi hardcoded style nahi lagaya, 
        taaki styles.js se style override kiya ja sake (jaise ki white color) 
      */}
      <Text style={isCounterButton ? { color: 'white', fontWeight: 'bold' } : {}}>
        {children}
      </Text>
    </Pressable>
  );
}