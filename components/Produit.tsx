import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import Layout from './Layout';

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

        <TouchableOpacity style={styles.button} onPress={() => { /* Logique d'ajout au panier */ }}>
          <Text style={styles.buttonText}>Ajouter au panier</Text>
        </TouchableOpacity>

        <Text style={styles.similarTitle}>Produits similaires</Text>

        <View style={styles.itemContainer}>
          {similarProducts.map((p, index) => (
            <TouchableOpacity key={index} style={styles.item} onPress={() => handleProductPress(p)}>
              <Image source={p.images} style={styles.itemImage} />
              <View style={styles.textContainer}>
                <Text style={styles.itemText}>{p.nom}</Text>
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
  carousel: {
    height: 350,
    marginTop: 16,
    paddingLeft: 16,
  },
  carouselImage: {
    width: 350,
    height: 350,
    marginRight: 10,
    borderRadius: 10,
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
  button: {
    backgroundColor: '#FFD700',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  similarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    fontStyle: 'italic',
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
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
  },
  itemText: {
    marginTop: 5,
    textAlign: 'left',
    flex: 1,
  },
  itemPrice: {
    marginTop: 5,
    textAlign: 'right',
    flex: 1,
    fontWeight: 'bold',
  },
});
