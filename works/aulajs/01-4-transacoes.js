const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

function createTransaction(transaction) {
  user.transactions.push(transaction)

  if (transaction.type === 'credit') {
    user.balance += transaction.value
  } else if (transaction.type === 'debit') {
    user.balance -= transaction.value
  }
}

function getHigherTransactionsByType(type) {
  let higherTransaction
  let higherValue = 0

  for (let transaction of user.transactions) {
    if (transaction.type === type && transaction.value > higherValue) {
      higherValue = transaction.value
      higherTransaction = transaction
    }
  }
  return higherTransaction
}

function getAverageTransactionValue() {
  let sum = 0

  for (let transaction of user.transactions) {
    sum += transaction.value
  }
  return sum / user.transactions.length
}

function getTransactionsCount() {
  const count = {
    credit: 0,
    debit: 0
  }

  for (const transaction of user.transactions) {
    if (transaction.type === 'credit') {
      count.credit++
    } else {
      count.debit++
    }
  }

  return count
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });
createTransaction({ type: "debit", value: 10 });
createTransaction({ type: "debit", value: 100 });

console.log(user.balance)

console.log(getHigherTransactionsByType('credit'))
console.log(getHigherTransactionsByType('debit'))
console.log(getAverageTransactionValue())
console.log(getTransactionsCount(user.transactions))