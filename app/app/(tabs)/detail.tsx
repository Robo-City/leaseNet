import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter, } from 'expo-router';

const DetailsScreen: React.FC = () => {


  // You would fetch or use the data for this id here
  // For demo purposes, let's just display the id
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details for item </Text>
      {/* Add more detail about the item here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
