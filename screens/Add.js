import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import properties from '../assets/style/mainProps'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import Colors from '../assets/style/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Add({navigation}) {
    [value, setValue] = useState('');
    [title, setTitle] = useState('');

    const addOrUpdateData = async (key, newData) => {
        try {
          // Retrieve the existing JSON data from AsyncStorage
          const jsonData = await AsyncStorage.getItem(key);
      
          let existingData = {};
          if (jsonData) {
            existingData = JSON.parse(jsonData);
          }
      
          // Update the existing data with the new data
          existingData = { ...existingData, ...newData };
      
          // Store the updated JSON data back into AsyncStorage
          await AsyncStorage.setItem(key, JSON.stringify(existingData));
      
          alert('JSON data added or updated successfully!');
        } catch (error) {
          alert(`${error}Error adding or updating JSON data:`, error);
        }
    };
      

    const AsyncTest = () => {
        addOrUpdateData("transactions", {id: "11", price: 520, title: "TestTest123"})
    }
    


  return (
    <View style={[properties.primaryBackground, styles.container]}> 
        <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Value"
        placeholderTextColor={Colors["textColor"]}
        keyboardType="numeric"
        />
        <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder="Title"
        placeholderTextColor={Colors["textColor"]}
        keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={AsyncTest} >
            <Text style={styles.buttonText}>Add</Text>
            <EvilIcons name="plus" size={28} color={Colors["darkTextColor"]} />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    input: {
        backgroundColor: Colors['secondary'],
        paddingVertical: 8,
        paddingHorizontal: 5,
        marginVertical: 10,
        borderRadius: 5,
        color: Colors['textColor']
    },
    button: {
        backgroundColor: Colors['green'],
        paddingVertical: 8,
        paddingHorizontal: 5,
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: Colors['darkTextColor'],
        fontSize: 16,
    }
});