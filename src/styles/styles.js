import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  section: {
    marginVertical: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: { 
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#007aff',
  },

  // Tasbih List Styles
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemName: {
    flex: 2.5,
    fontSize: 15,
    color: '#333',
    paddingRight: 10,
  },
  counterContainer: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  counter: {
    fontSize: 16,
    fontWeight: 'bold',
    minWidth: 40, 
    textAlign: 'center',
    marginHorizontal: 8,
    color: '#333',
  },
  
  // Button Styles (General)
  button: { 
    padding: 10,
    borderRadius: 20, // Rounded shape for counter buttons
    minWidth: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  incrementButton: {
    backgroundColor: '#4cd964', // Green
  },
  decrementButton: {
    backgroundColor: '#ff3b30', // Red
  },
  // Note: Button text will need to be white for contrast
  
  // Search & Add Styles
  inputRow: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: '#f0f0f0',
  },
  addButton: {
    backgroundColor: '#007aff', // Blue
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    minWidth: 80,
    alignSelf: 'stretch',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  }
});