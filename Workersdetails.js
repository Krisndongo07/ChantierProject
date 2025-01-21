import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';

const App = () => {
  // State to store workers' details
  const [workers, setWorkers] = useState([]);
  
  // State for the input fields
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [hours, setHours] = useState('');

  // Function to handle adding a new worker
  const addWorker = () => {
    // Validation to check if all fields are filled
    if (name === '' || role === '' || hours === '') {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    // Creating a new worker object
    const newWorker = { id: Math.random().toString(), name, role, hours };

    // Adding the new worker to the workers array
    setWorkers(prevWorkers => [...prevWorkers, newWorker]);

    // Clear input fields after adding the worker
    setName('');
    setRole('');
    setHours('');
  };

  // Function to render each worker's details in the list
  const renderWorker = ({ item }) => (
    <View style={styles.workerItem}>
      <Text style={styles.workerText}>Name: {item.name}</Text>
      <Text style={styles.workerText}>Role: {item.role}</Text>
      <Text style={styles.workerText}>Hours Worked: {item.hours} hrs</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chantier - Worker Details</Text>

      {/* Input fields for worker details */}
      <TextInput
        style={styles.input}
        placeholder="Enter worker name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter worker role"
        value={role}
        onChangeText={setRole}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter working hours"
        value={hours}
        onChangeText={setHours}
        keyboardType="numeric"
      />

      {/* Button to add worker */}
      <Button title="Add Worker" onPress={addWorker} />

      {/* FlatList to display workers */}
      <FlatList
        data={workers}
        renderItem={renderWorker}
        keyExtractor={(item) => item.id}
        style={styles.workerList}
      />
    </View>
  );
};

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 5,
  },
  workerItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  workerText: {
    fontSize: 16,
  },
  workerList: {
    marginTop: 20,
  },
});

export default App;
