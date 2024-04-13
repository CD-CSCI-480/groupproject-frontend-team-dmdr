import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const data = [
  { id: 1, category: 'Category 1', title: 'Item 1', description: 'Description of item 1', image: require('../assets/images/full_body.jpg') },
  { id: 2, category: 'Category 1', title: 'Item 2', description: 'Description of item 2', image: require('../assets/images/full_body.jpg') },
  { id: 3, category: 'Category 2', title: 'Item 3', description: 'Description of item 3', image: require('../assets/images/full_body.jpg') },
  { id: 4, category: 'Category 2', title: 'Item 4', description: 'Description of item 4', image: require('../assets/images/full_body.jpg') },
  { id: 5, category: 'Category 3', title: 'Item 5', description: 'Description of item 5', image: require('../assets/images/full_body.jpg') },
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    filterData();
  }, [searchQuery, selectedCategory]);

  const filterData = () => {
    const filtered = data.filter(item => {
      return (
        (!selectedCategory || item.category === selectedCategory) &&
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredData(filtered);
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  const debouncedFilterData = debounce(filterData, 300);

  const renderCategories = () => {
    const categories = ['All', ...new Set(data.map(item => item.category))];
    return categories.map(category => (
      <TouchableOpacity
        key={category}
        style={[styles.categoryButton, selectedCategory === category && styles.selectedCategory]}
        onPress={() => setSelectedCategory(category === 'All' ? null : category)}
      >
        <Text style={styles.categoryText}>{category}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        onChangeText={text => {
          setSearchQuery(text);
          debouncedFilterData();
        }}
        value={searchQuery}
      />
      <View style={styles.categoriesContainer}>{renderCategories()}</View>
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  categoryButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#eee',
    marginRight: 10,
  },
  categoryText: {
    fontSize: 16,
  },
  selectedCategory: {
    backgroundColor: '#e32f45',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
  },
});

export default Search;