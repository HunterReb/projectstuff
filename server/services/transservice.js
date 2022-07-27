let transactions = [ // Turn into empty array
    { id: 1, amount: 20, tag: "Groceries", merchant: "Tesco" }, 
    { id: 2, amount: 40, tag: "Drinks", merchant: "Wetherspoons"} // How to set the structure of the array?
  ];
  
  const transactionsService = {
    selectAll: () => {
      return transactions;
    },
    selectOneById: (id) => {
      return transactions.find((transaction) => transaction.id === id);
    },
    updateOne: (id, updatedTransaction) => {
      transactions = transactions.map((transaction) =>
        transaction.id === id ? { ...updatedTransaction, id } : transaction
      );
    },
    deleteOne: (id) => {
      transactions = transactions.filter((transaction) => transaction.id !== id);
    },
    insertOne: (newTransaction) => {
      console.log(newTransaction)
      transactions = [...transactions, { ...newTransaction, id: Date.now()}];
    },
  };
  
  module.exports = transactionsService;