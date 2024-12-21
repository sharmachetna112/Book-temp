 // src/utils/mockData.js
 const mockData = {
    books: [
      { id: 1, title: "Book A", category: "Fiction", author: "Author 1" },
      { id: 2, title: "Book B", category: "Non-Fiction", author: "Author 2" },
    ],
    authors: [
      { id: 1, firstName: "Author", lastName: "One" },
      { id: 2, firstName: "Author", lastName: "Two" },
    ],
  };
  
  // src/utils/mockData.js
  
  export const getMockData = (resource) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(JSON.parse(localStorage.getItem(resource)) || []), 500);
    });
  };
  
  export const addMockData = (key, data) => {
    return new Promise((resolve, reject) => {
      const currentData = JSON.parse(localStorage.getItem(key)) || [];
      if (currentData.some((item) => item.id === data.id)) {
        reject(new Error("Duplicate ID detected"));
      } else {
        currentData.push(data);
        localStorage.setItem(key, JSON.stringify(currentData));
        resolve(data);
      }
    });
  };
  
  export const deleteMockData = (key, id) => {
    return new Promise((resolve, reject) => {
      const currentData = JSON.parse(localStorage.getItem(key)) || [];
      const updatedData = currentData.filter((item) => item.id !== id);
  
      if (updatedData.length === currentData.length) {
        reject(new Error("Item not found"));
      } else {
        localStorage.setItem(key, JSON.stringify(updatedData));
        resolve(updatedData);
      }
    });
  };
  
  
  // Export additional mock data for random data generation
  export const categories = ["Fiction", "Non-Fiction", "Mystery", "Science", "Biography"];
  export const editions = ["1st", "2nd", "3rd", "4th", "Special Edition"];
  
  
  // Generate random books
  export const getRandomBooks = () =>
    Array.from({ length: Math.floor(Math.random() * 10) + 5 }, (_, i) => ({
      id: i + 1,
      name: `Book ${i + 1}`,
      title: `Title ${i + 1}`,
      category: categories[Math.floor(Math.random() * categories.length)],
      edition: editions[Math.floor(Math.random() * editions.length)],
    }));
  
  // Generate random authors
  export const getRandomAuthors = () =>
    Array.from({ length: Math.floor(Math.random() * 5) + 3 }, (_, i) => ({
      id: i + 1,
      firstName: `AuthorFirst${i + 1}`,
      lastName: `AuthorLast${i + 1}`,
    }));
  
    // Generate random users
  export const getRandomUsers = () =>
    Array.from({ length: Math.floor(Math.random() * 5) + 3 }, (_, i) => ({
      id: i + 1,
      firstName: `UserFirst${i + 1}`,
      lastName: `UserLast${i + 1}`,
      email: `user${i + 1}@example.com`,
    }));
  
  // Generate random inventory
  export const getRandomInventory = () =>
    Array.from({ length: Math.floor(Math.random() * 5) + 3 }, (_, i) => ({
      id: i + 1,
      name: `Inventory ${i + 1}`,
      stock: Math.floor(Math.random() * 100) + 1,
    }));
  
  // Generate random cart items
  export const getRandomCart = (books) =>
    books.slice(0, Math.floor(Math.random() * books.length));
  