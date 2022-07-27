let merchants = [ // Turn into empty array
    { id: "name"}, // How to set the structure of the array?
  ];
  
  const merchantService = {
    selectAll: () => {
      return merchants;
    },
    selectOneById: (id) => {
      return merchants.find((merchant) => merchant.id === id);
    },
    updateOne: (id, updatedMerchant) => {
      merchants = merchants.map((merchant) =>
        merchant.id === id ? { ...updatedMerchant, id } : merchant
      );
    },
    deleteOne: (id) => {
      merchants = merchants.filter((merchant) => merchant.id !== id);
    },
    insertOne: (newMerchant) => {
      merchants = [...merchants, { ...newMerchant}];
    },
  };
  
  module.exports = merchantService;