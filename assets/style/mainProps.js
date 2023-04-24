import { View, Text, StyleSheet } from 'react-native'
import Colors from './colors'

const properties = StyleSheet.create({
    primaryBackground: {
        backgroundColor: Colors["background"],
        width: "100%",
        height: "100%",
    },
    pageContainer: {
        padding: 10,
        gap: 20,
    },
    pageHeader: {
        fontSize: 40,
        fontWeight: 300,
        color: Colors["textColor"],
    },
    headerStyling: {
        backgroundColor: Colors["background"],
        color: Colors["darkTextColor"],
    }
});

export default properties;