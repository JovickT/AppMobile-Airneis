import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import Layout from './Layout';
// import styles from '../assets/css/styles';

interface Product {
  nom: string;
  images: any;
  prix?: string;
}

type RootStackParamList = {
  Categorie: {
    nom: string;
    images: any;
  };
};

const products: Product[] = [
  { nom: 'Table en marbre', prix: '500€', images: require('@/assets/images/temps.png') },
  { nom: 'Chaise en bois', prix: '150€', images: require('@/assets/images/temps.png') },
  { nom: 'Canapé en cuir', prix: '1200€', images: require('@/assets/images/temps.png') },
  { nom: 'Lit en métal', prix: '800€', images: require('@/assets/images/temps.png') }
];

export default function Categorie() {
  const route = useRoute<RouteProp<RootStackParamList, 'Categorie'>>();
  const { nom, images } = route.params;

  return (
    <Layout>
      <ScrollView style={styles.container}>
        <Image source={images} style={styles.categoryImage} />
        <Text style={styles.title}>{nom}</Text>
        <Text style={styles.description}>Description</Text>
        <View style={styles.itemContainer}>
          {products.map((p, index) => (
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
  categoryImage: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
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
    width: 100,
    height: 100,
  },
  itemText: {
    marginTop: 5,
    textAlign: 'center',
  },
});
