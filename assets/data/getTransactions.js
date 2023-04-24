import { View, Text } from 'react-native'
import React from 'react'
import * as transactionsJson from './transactions.json'

const Transactions = class {

    transactions = {};

    constructor() {
        this.transactions = transactionsJson;
    }

    getTransactions() {
        return transactions;
    }
}

export default Transactions;