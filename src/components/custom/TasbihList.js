import React, { useState } from 'react';
import { View, FlatList } from 'react-native'; 
import { Text , Button} from '../ui';
import { styles } from '../../styles/styles';
// NOTE: initialAzkaar ab App.js mein use ho raha hai, yahan zaroorat nahi.
// import { initialAzkaar } from '../../data/azkaar';

/**
 * Custom/TasbihList
 */
export default function TasbihList({ items, setItems }) {
  
  // --- Core Logic: Immutable Update ---
  const updateCount = (id, delta) => {
    setItems(currentItems => {
      return currentItems.map(item => {
        if (item.id === id) {
          const newCount = item.count + delta;
          const finalCount = Math.max(0, newCount); 
          
          return {
            ...item, 
            count: finalCount,
          };
        }
        return item;
      });
    });
  };

  const increment = (id) => updateCount(id, 1);
  const decrement = (id) => updateCount(id, -1);
  // ------------------------------------

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      
      <View style={styles.counterContainer}>
        <Button 
          style={[styles.button, styles.decrementButton]} // styles.button add kiya
          onPress={() => decrement(item.id)} // <-- FIX: Correct function call
        >
          -
        </Button>
      <Text style={styles.counter}>{item.count}</Text>
      <Button 
          style={[styles.button, styles.incrementButton]} // styles.button add kiya
          onPress={() => increment(item.id)} // <-- FIX: Correct function call
        >
          +
        </Button>
      </View>
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      <FlatList
        data={items}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
      />
    </View>
  );
}