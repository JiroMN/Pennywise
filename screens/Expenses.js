import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import properties from './../assets/style/mainProps';
import List from '../components/List';
import transactions from '../assets/data/transactions.json';


export default function Income({navigation}) {
  [incomeArr, setIncomeArr] = useState([]);
  
  useEffect(()=>{
    for(let i = 0; i < transactions.length; i++) {
      if(transactions[i]['price'] <= 0) {
        setIncomeArr(incomeArr => [...incomeArr, {
          id: `${transactions[i]['id']}`,
          price: transactions[i]['price'],
          title: `${transactions[i]['title']}`,
        }]);
      }
    }
  }, []);

  return (
    <View style={[properties.primaryBackground, styles.container]}>
      {/* <Button title="Click" onPress={addIncome}/> */}
      <List style={styles.list} data={incomeArr}/>
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    minHeight: 200,
    maxHeight: 300,
  },
  container: {
    padding: 10
  }
});