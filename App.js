//import React from 'react';
import React, { useState } from 'react'; // ✅ useState import kiya
import { View, ScrollView } from 'react-native';
import { styles } from './src/styles/styles';
import AboutMe from './src/components/custom/AboutMe';
import TasbihList from './src/components/custom/TasbihList';
// import TeacherMessage from './src/components/custom/TeacherMessage'; // Students create this
import TeacherMessage from './src/components/custom/TeacherMessage';
import SearchAndAdd from './src/components/custom/SearchAndAdd';
import { STUDENT_NAME, REG_NO } from './src/config/student';
import { initialAzkaar } from './src/data/azkaar'; // ✅ Initial data import kiya

export default function App() {
  const [azkaarItems, setAzkaarItems] = useState(initialAzkaar); // ✅ State Lifted
  const [searchTerm, setSearchTerm] = useState(''); // ✅ New state for search
 
 // --- Filtering Logic ---
  const filteredItems = azkaarItems.filter(item => {
    // Agar search term empty hai, toh sabhi items dikhao
    if (searchTerm.trim() === '') {
      return true;
    }
    // Case-insensitive search
    return item.phrase.toLowerCase().includes(searchTerm.toLowerCase());
  });
  // -------------------------
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AboutMe name={STUDENT_NAME} regNo={REG_NO} />
      <TeacherMessage /> {/* TeacherMessage Rendered */}
      <TasbihList
       items={filteredItems} // Filtered items pass kiye
       setItems={setAzkaarItems}
        />
      <SearchAndAdd 
      currentItems={azkaarItems} 
        setItems={setAzkaarItems}
        // ✅ Nayi props SearchAndAdd ko di
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
      />
    </ScrollView>
  );
}