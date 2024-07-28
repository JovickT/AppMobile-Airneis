import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Layout from './Layout';

interface Product {
  nom: string;
  images: any;
  prix?: string;
}

const products: Product[] = [
  { nom: 'Table en marbre', prix: '500€', images: require('@/assets/images/temps.png') },
  { nom: 'Chaise en bois', prix: '150€', images: require('@/assets/images/temps.png') },
  { nom: 'Canapé en cuir', prix: '1200€', images: require('@/assets/images/temps.png') },
  { nom: 'Lit en métal', prix: '800€', images: require('@/assets/images/temps.png') }
];

export default function Categorie() {
  const { nom, images } = useLocalSearchParams();
  const router = useRouter();

  const handleProductPress = (product: Product) => {
    router.push({
      pathname: '/produit',
      params: { nom: product.nom, images: product.images, prix: product.prix },
    });
  };

  return (
    <Layout>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{nom}</Text>
        <Image source={images} style={styles.categoryImage} />
        <Text style={styles.description}>Description</Text>
        <View style={styles.itemContainer}>
          {products.map((p, index) => (
            <TouchableOpacity key={index} style={styles.item} onPress={() => handleProductPress(p)}>
              <Image source={p.images} style={styles.itemImage} />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemName}>{p.nom}</Text>
                <Text style={styles.itemPrice}>{p.prix}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#FFD700',
    marginVertical: 10,
  },
  categoryImage: {
    width: '90%',
    height: 200,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  item: {
    width: '45%',
    margin: 10,
    alignItems: 'center',
  },
  itemImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  itemTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  itemName: {
    textAlign: 'left',
    flex: 1,
  },
  itemPrice: {
    textAlign: 'right',
    flex: 1,
  },
});

