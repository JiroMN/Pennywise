import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import properties from '../assets/style/mainProps'
import Colors from '.././assets/style/colors'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function navButton({ title, toPage, icon, iconColor, navigation }) {
  return (
    <TouchableOpacity style={[styles.button]}>
      <Text style={styles.innertext}>{title}</Text>
      <EvilIcons name={icon} size={32} color={iconColor} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: Colors["secondary"],
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      gap: 5,
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
    },
    innertext: {
      color: Colors["textColor"],
      fontSize: 20,
    }
  });