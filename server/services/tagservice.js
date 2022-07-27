let tags = [ // Turn into empty array
    { id: "name"}, // How to set the structure of the array?
  ];
  
  const tagsService = {
    selectAll: () => {
      return tags;
    },
    selectOneById: (id) => {
      return tags.find((tag) => tag.id === id);
    },
    updateOne: (id, updatedTag) => {
      tags = tags.map((tag) =>
        tag.id === id ? { ...updatedTag, id } : tag
      );
    },
    deleteOne: (id) => {
      tags = tags.filter((tag) => tag.id !== id);
    },
    insertOne: (newTag) => {
      tags = [...tags, { ...newTag}];
    },
  };
  
  module.exports = tagsService;