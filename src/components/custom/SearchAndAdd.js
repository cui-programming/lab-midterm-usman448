import React, { useState } from 'react';
import { View, Alert } from 'react-native'; // <-- Alert import kiya
import { styles } from '../../styles/styles';
import { TextInput, Button, Text } from '../ui'; // Import from UI layer

/**
 * Custom/SearchAndAdd
 */
export default function SearchAndAdd({ currentItems, setItems, searchTerm, setSearchTerm }) {
  const [newPhrase, setNewPhrase] = useState('');
  
  // --- Add Logic ---
  const handleAddZikr = () => {
    const phrase = newPhrase.trim(); 
    
    if (!phrase) {
      Alert.alert('Error', 'Please enter a phrase to add.'); // <-- Alert.alert use kiya
      return;
    }

    // Check for uniqueness
    const isDuplicate = currentItems.some(item => 
      item.phrase.toLowerCase() === phrase.toLowerCase()
    );

    if (isDuplicate) {
      Alert.alert('Error', `'${phrase}' is already in the list.`);
      setNewPhrase('');
      return;
    }

    const newItem = {
      id: Date.now().toString(), 
      phrase: phrase,
      count: 0,
    };

    setItems([...currentItems, newItem]);
    setNewPhrase('');
  };
  return (
    <View style={styles.section}>
    <Text style={styles.sectionTitle}>Add New Zikr</Text>
      <View style={styles.inputRow}>
        <TextInput 
          style={styles.textInput}
          placeholder="New Zikr Phrase"
          value={newPhrase}
          onChangeText={setNewPhrase}
        />
        <Button 
          style={[styles.button, styles.addButton]} // styles.button add kiya
          onPress={handleAddZikr} // <-- Function reference pass kiya
        >
          <Text style={styles.addButtonText}>Add</Text>
        </Button>
      </View>

      <Text style={styles.sectionTitle}>Search</Text>
      <TextInput 
        style={styles.textInput}
        placeholder="Search for Zikr"
        value={searchTerm} // <-- FIX: searchTerm prop use kiya
        onChangeText={setSearchTerm} // <-- FIX: setSearchTerm prop use kiya
      />
    </View>
  );
}