import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '.././assets/style/colors'

export default function ListItem({price, title}) {
  const [priceColor, setPriceColor] = useState(Colors["green"])

  useEffect(() =>{
    if(price < 0) {
      setPriceColor(Colors["red"]);
    }
  });

  return (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={[styles.itemText, {color: priceColor,}]}>&euro;{price}</Text>
      <Text style={styles.itemText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors["secondary"],
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  itemText: {
    color: Colors["textColor"],
    fontSize: 16,
  }
});