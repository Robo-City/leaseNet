
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

const homesData = [
  {
    id: '1',
    title: '1100 Sacramento Street',
    subtitle: 'New Homes',
    imageUrl: 'https://example.com/home1.jpg', // Replace with your actual image URL
  },
  {
    id: '2',
    title: '4023 Folsom Street',
    subtitle: 'New Homes',
    imageUrl: 'https://example.com/home2.jpg', // Replace with your actual image URL
  },
  {
    id: '3',
    title: '278 Brannan St',
    subtitle: 'New Homes',
    imageUrl: 'https://example.com/home3.jpg', // Replace with your actual image URL
  },
  {
    id: '4',
    title: 'Great house',
    subtitle: 'New Homes',
    imageUrl: 'https://example.com/home4.jpg', // Replace with your actual image URL
  },
];

const Home: React.FC = () => {
  const router = useRouter();

  const handlePress = (id: string) => {
    router.push("/detail");
  };

  const renderItem = ({ item }: { item: typeof homesData[0] }) => (
    <TouchableOpacity style={styles.homeItem} onPress={() => handlePress(item.id)}>
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.homeImage}
      />
      <Text style={styles.homeTitle}>{item.title}</Text>
      <Text style={styles.homeSubtitle}>{item.subtitle}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
      </View>

      <View style={styles.exploreListings}>
        <Text style={styles.sectionTitle}>Explore Listings</Text>
        <View style={styles.listingRow}>
          <TouchableOpacity style={styles.listingItem}>
            <Text style={styles.listingText}>Recently Sold</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listingItem}>
            <Text style={styles.listingText}>For Rent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listingItem}>
            <Text style={styles.listingText}>Open Houses</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.Lusaka}>
        <Text style={styles.sectionTitle}>Homes in San Francisco</Text>
        <FlatList
          data={homesData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.homeRow}
        />
      </View>

      <TouchableOpacity style={styles.showAllButton} onPress={() => { /* Handle show all button click */ }}>
        <Text style={styles.showAllText}>Show all</Text>
      </TouchableOpacity>

      <View style={styles.bottomNavigation}>
        {/* Bottom navigation elements */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your existing styles


  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  exploreListings: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listingItem: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  listingText: {
    fontSize: 16,
    color: '#333',
  },
  Lusaka: {
    marginVertical: 20,
  },
  homeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  homeItem: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  homeImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  homeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  homeSubtitle: {
    fontSize: 14,
    color: '#777',
  },
  showAllButton: {
    marginVertical: 20,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  showAllText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNavigation: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
});

export default Home;
