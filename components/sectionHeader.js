import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '.././assets/style/colors'

export default function sectionHeader({title}) {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        borderBottomColor: Colors["textColor"],
        width: 200,
    },
    header: {
        fontSize: 32,
        fontWeight: '300',
        color: Colors["textColor"],
        
    }
});