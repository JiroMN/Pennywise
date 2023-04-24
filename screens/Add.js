import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import properties from '../assets/style/mainProps'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import Colors from '../assets/style/colors'

export default function Add({navigation}) {
    [value, setValue] = useState('');
    [title, setTitle] = useState('');
    [isLoading, setLoading] = useState(true);
    [data, setData] = useState([]);

    useEffect(() => {
        const url = "https://lidex.techlythical.com/transactions.json";
        fetch(url)
          .then((resp) => resp.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

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
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
            <EvilIcons name="plus" size={28} color={Colors["darkTextColor"]} />
        </TouchableOpacity>

        {isLoading ? (
            <Text>Loading...</Text>
        ) : (
            data.map((post) => {
            return (
                <View>
                    <Text style={styles.title}>{post.title}</Text>
                    <Text>{post.body}</Text>
                </View>
            );
            })
        )}
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