// React Expo 
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
// Assets
import properties from '../assets/style/mainProps';
import transactions from '../assets/data/transactions';
import Colors from '../assets/style/colors';
// Components
import BudgetCard from '../components/budgetCard';
import SectionHeader from '../components/sectionHeader';
import List from '../components/List';



export default function Home({ navigation }) {
  // Setup useState for the total budget
  [totalBudget, setTotalBudget] = useState(0);

  useEffect(()=>{
    let totalLocal = 0;
    // Calc the total budget
    for(let i = 0; i < transactions.length; i++) {
      totalLocal += transactions[i]["price"];
    }
    // Limit to 2 decimals
    totalLocal = totalLocal.toFixed(2);
    // Set useState to the budget
    setTotalBudget(`€${totalLocal}`);
  })


  return (
      <View style={[properties.pageContainer, properties.primaryBackground]}>
        {/* Header */}
        <Text style={properties.pageHeader}>Welcome</Text>

        {/* Budget Card */}
        <BudgetCard amount={totalBudget}/>

        {/* <List /> */}
        <SectionHeader title="Quick View"/>
        <List style={styles.list} data={transactions}/>
        
        {/* Navigate Container */}
        <View>
          <Button styles={styles.button} title="Add" onPress={()=> navigation.navigate('Add')}/>
          <Button styles={styles.button} title="Income" onPress={()=> navigation.navigate('Income')}/>
          <Button title="Expenses" onPress={()=> navigation.navigate('Expenses')}/>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  list: {
    minHeight: 200,
    maxHeight: 300
  },
  button: {
    backgroundColor: Colors["secondary"],
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 5,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: Colors["textColor"],
    fontSize: 20,
  },
});