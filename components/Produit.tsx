import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import Layout from './Layout';
// import styles from '../assets/css/styles';

interface Product {
  nom: string;
  images: any;
  prix?: string;
}

type RootStackParamList = {
  Produit: {
    nom: string;
    images: any;
    prix?: string;
  };
};

const similarProducts: Product[] = [
  { nom: 'Table en bois', prix: '400€', images: require('@/assets/images/temps.png') },
  { nom: 'Chaise en métal', prix: '200€', images: require('@/assets/images/temps.png') },
  { nom: 'Canapé en tissu', prix: '1000€', images: require('@/assets/images/temps.png') }
];

export default function Produit() {
  const route = useRoute<RouteProp<RootStackParamList, 'Produit'>>();
  const { nom, images, prix } = route.params;

  return (
    <Layout>
      <ScrollView style={styles.container}>
        <ScrollView horizontal pagingEnabled style={styles.carousel}>
          {[images, images, images].map((img, index) => (
            <Image key={index} source={img} style={styles.carouselImage} />
          ))}
        </ScrollView>

        <View style={styles.productHeader}>
          <Text style={styles.productName}>{nom}</Text>
          <Text style={styles.productPrice}>{prix}</Text>
        </View>

        <Text style={styles.description}>DESCRIPTION</Text>

        <Button title="Ajouter au panier" onPress={() => { /* Logique d'ajout au panier */ }} />

        <Text style={styles.similarTitle}>Produits similaires</Text>

        <View style={styles.itemContainer}>
          {similarProducts.map((p, index) => (
            <View key={index} style={styles.item}>
              <Image source={p.images} style={styles.itemImage} />
              <Text style={styles.itemText}>{p.nom}</Text>
              <Text style={styles.itemText}>{p.prix}</Text>
            </View>
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
  carousel: {
    height: 200,
  },
  carouselImage: {
    width: 300,
    height: 200,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 24,
    color: 'green',
  },
  description: {
    fontSize: 16,
    margin: 20,
  },
  similarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
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
    width: 100,
    height: 100,
  },
  itemText: {
    marginTop: 5,
    textAlign: 'center',
  },
});
