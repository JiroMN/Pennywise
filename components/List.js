import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ListItem from './listItem';
import transactions from './../assets/data/transactions';



export default function List({data}) {
  return (
    <FlatList
    data={data}
    renderItem={({item}) => <ListItem title={item.title} price={item.price} />}
    keyExtractor={item => item.id}
    />
  )
}

