import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '.././assets/style/colors'



export default function BudgetCard({amount}) {
    // UseState Hooks
    const [budgetCardColor, setBudgetCardColor] = useState(Colors["green"]);
    const [textColor, setTextColor] = useState(Colors["darkTextColor"]);
    const [budget, setBudget] = useState(0);

    // useEffect Hook
    useEffect(()=>{
        setBudget(amount);
        if(budget < 0) {
            setBudgetCardColor(Colors["red"]);
            setTextColor(Colors["textColor"]);
        }
        else {
            setBudgetCardColor(Colors["green"]);
            setTextColor(Colors["darkTextColor"]);
        }
    });

    return (        
        <View style={[styles.container, {backgroundColor: budgetCardColor}]}>
            <Text style={[styles.innertext, {color: textColor}]}>{budget}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
        borderRadius: 15,
    },
    innertext: {
        fontSize: 60,
    }
});