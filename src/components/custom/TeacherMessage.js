
// Note: Is component mein STUDENT_NAME ko use karne ke liye, 
// aapko use import karna padega ya props ke zariye pass karna padega.
// Agar hum simplicity rakhte hain, toh hardcode/static text theek hai.


// Re-using the above code with import:

// src/components/custom/TeacherMessage.js
import { View } from 'react-native';
import { Text } from '../ui'; 
import { styles } from '../../styles/styles'; 
import { STUDENT_NAME } from '../../config/student'; // Import student name

/**
 * Custom/TeacherMessage
 * Displays a simple static message from the teacher/examiner.
 * Uses ONLY ui/Text and standard View.
 */
export default function TeacherMessage() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Message from Instructor</Text>
      <Text>
        Welcome, {STUDENT_NAME}! Good luck with your Midterm Exam. 
        Your task is to complete the Tasbih Counter application functionality.
      </Text>
    </View>
  );
}